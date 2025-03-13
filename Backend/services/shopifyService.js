// services/shopifyService.js
const axios = require('axios');
const config = require('../config/config');

// Check if a customer exists in Shopify
async function checkIfShopifyCustomerExists(email) {
  try {
    const response = await axios.get(`https://kisanestoredev.myshopify.com/admin/api/2023-01/customers/search.json?query=email:${email}`, {
      headers: {
        'X-Shopify-Access-Token': config.SHOPIFY_ACCESS_TOKEN,
      },
    });
    return response.data.customers[0] || null;
  } catch (error) {
    console.error('Error checking Shopify customer:', error);
    throw new Error('Error checking Shopify customer.');
  }
}

// Create a new Shopify customer
async function createShopifyCustomer(email, name) {
  try {
    const response = await axios.post(config.SHOPIFY_STORE_URL, {
      customer: {
        email,
        first_name: name.split(' ')[0],
        last_name: name.split(' ')[1] || '',
        password: 'defaultpassword123',  // You can change this to generate a password or leave it for Shopify to handle
      },
    }, {
      headers: {
        'X-Shopify-Access-Token': config.SHOPIFY_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating Shopify customer:', error);
    throw new Error('Error creating Shopify customer.');
  }
}

module.exports = {
  checkIfShopifyCustomerExists,
  createShopifyCustomer,
};
