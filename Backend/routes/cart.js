const express = require('express');
const router = express.Router();
const axios = require('axios');
const Cart = require('../models/Cart');

// Helper: identify customer or guest session
const getUserIdentity = (req) => ({
  customerId: req.user?.id || null,
  sessionId: req.sessionID
});

// POST /api/cart/add
router.post('/add', async (req, res) => {
  const { variantId, quantity = 1 } = req.body;
  const { customerId, sessionId } = getUserIdentity(req);

  if (!variantId) {
    return res.status(400).json({ error: 'variantId is required' });
  }

  try {
    // Step 1: Look for an existing cart for this user/session
    let cart = await Cart.findOne({
      $or: [
        { customerId: customerId || null },
        { sessionId: sessionId || null }
      ]
    });

    // Step 2: Create new Shopify cart if needed
    if (!cart) {
      const createRes = await axios.post(
        `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`,
        {
          query: `
            mutation {
              cartCreate {
                cart {
                  id
                  checkoutUrl
                }
              }
            }
          `
        },
        {
          headers: {
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN,
            'Content-Type': 'application/json'
          }
        }
      );

      const createdCart = createRes.data.data.cartCreate.cart;

      cart = await Cart.create({
        cartId: createdCart.id,
        checkoutUrl: createdCart.checkoutUrl,
        customerId,
        sessionId,
        items: []
      });
    }

    // Step 3: Add item to Shopify cart
    await axios.post(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`,
      {
        query: `
          mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
            cartLinesAdd(cartId: $cartId, lines: $lines) {
              cart {
                id
              }
              userErrors {
                message
              }
            }
          }
        `,
        variables: {
          cartId: cart.cartId,
          lines: [{ quantity, merchandiseId: variantId }]
        }
      },
      {
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN,
          'Content-Type': 'application/json'
        }
      }
    );

    // Step 4: Update MongoDB cart
    const existingItem = cart.items.find(item => item.variantId === variantId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ variantId, quantity });
    }

    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error('Add to cart failed:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to add to cart' });
  }
});
// GET or POST /api/cart/fetch
router.post('/fetch', async (req, res) => {
  const customerId = req.user?.id || null;
  const sessionId = req.sessionID;

  try {
    const cart = await Cart.findOne({
      $or: [
        { customerId: customerId || null },
        { sessionId: sessionId || null }
      ]
    });

    if (!cart) {
      return res.json({ items: [], cartId: null });
    }

    res.json({
      cartId: cart.cartId,
      checkoutUrl: cart.checkoutUrl,
      items: cart.items
    });
  } catch (err) {
    console.error('Fetch cart error:', err.message);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});
router.post('/checkout', async (req, res) => {
  const { cartId } = req.body;

  if (!cartId) {
    return res.status(400).json({ error: 'Missing cartId' });
  }

  try {
    const response = await axios.post(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`,
      {
        query: `
          query GetCart($id: ID!) {
            cart(id: $id) {
              checkoutUrl
            }
          }
        `,
        variables: {
          id: cartId
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN
        }
      }
    );

    const checkoutUrl = response.data?.data?.cart?.checkoutUrl;

    if (!checkoutUrl) {
      return res.status(500).json({ error: 'Checkout URL not found' });
    }

    res.json({ checkoutUrl });
  } catch (error) {
    console.error('Failed to fetch checkout URL:', error.message);
    res.status(500).json({ error: 'Failed to fetch checkout URL' });
  }
});

module.exports = router;
