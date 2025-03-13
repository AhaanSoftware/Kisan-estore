import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const shopifyStoreUrl = 'https://kisanestoredev.myshopify.com/api/2023-01/graphql.json';
  const accessToken = 'c2c0d5ac5aeae2d629915df7e7e422b6';

 // Function to get cookie by name
const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

// Function to check if PHPSESSID cookie exists (indicating session is active)
const isAuthenticated = () => {
  const sessionId = getCookie('PHPSESSID');  // Check if PHPSESSID exists
  return sessionId ? true : false;  // Return true if session is active, false if not
};

// Example of using isAuthenticated to check session before adding to cart
const handleAddToCart = () => {
  const isLoggedIn = isAuthenticated();
  if (isLoggedIn) {
      // Proceed with adding to cart logic
      console.log('Item added to cart');
  } else {
      alert('Please log in to add items to your cart.');
      // Redirect to login page if session is not found
      window.location.href = 'http://localhost/Connect_v1/User.php';  // Example redirect to login page
  }
};


  // Function to simulate setting a mock cookie (for testing purposes)
  const setMockCookie = () => {
    document.cookie = "authToken=mock-auth-token; path=/; domain=localhost; Secure; SameSite=None";
  };

  // Fetch product data using GraphQL from Shopify
  useEffect(() => {
    const fetchProduct = async () => {
      const query = `
        query {
          product(id: "gid://shopify/Product/${productId}") {
            title
            descriptionHtml
            variants(first: 1) {
              edges {
                node {
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
          }
        }
      `;

      try {
        const response = await axios.post(
          shopifyStoreUrl,
          { query },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': accessToken,
            },
          }
        );
        setProduct(response.data.data.product);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product data');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // Handle Add to Cart logic
  

  // Handle Buy Now logic
  const handleBuyNowClick = () => {
    const authToken = isAuthenticated();
    if (authToken) {
      const clientId = '072eaf48-1e2b-4c42-cc2c-86a00796e2c2';  // Replace with your actual client ID
      const redirectUri = 'http://localhost:5173/index.php?route=auth/Auth';  // Ensure this matches the registered redirect URI
      const authorizationEndpoint = 'https://connect.csc.gov.in/account/authorize';
      const authUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=read`;

      window.location.href = authUrl;  // Redirect to OAuth authorization
    } else {
      window.location.href = 'http://localhost/Connect_v1/User.php'; // Redirect to login if not authenticated
    }
  };

  // If loading, show loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error, show error message
  if (error) {
    return <div>{error}</div>;
  }

  // If the product is fetched successfully, display product details
  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.images.edges[0].node.src} alt={product.images.edges[0].node.altText} />
      <p dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      <p>{product.variants.edges[0].node.priceV2.amount} {product.variants.edges[0].node.priceV2.currencyCode}</p>
      <button onClick={handleAddToCart}>Add to Cart</button> {/* Add to Cart button */}
      <button onClick={handleBuyNowClick}>Buy Now</button> {/* Buy Now button */}
    </div>
  );
};

export default ProductDetails;
