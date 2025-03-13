// controllers/cscController.js
const axios = require('axios');
const config = require('../config/config');
const shopifyService = require('../services/shopifyService');

async function handleCscCallback(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Authorization code is missing.');
  }

  try {
    // Step 1: Exchange authorization code for an access token
    const tokenResponse = await axios.post('https://connect.csc.gov.in/account/token', {
      code,
      client_id: config.CSC_CLIENT_ID,
      client_secret: config.CSC_CLIENT_SECRET,
      redirect_uri: config.CSC_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    const { access_token } = tokenResponse.data;

    // Step 2: Get the user information from CSC
    const userResponse = await axios.get('https://connect.csc.gov.in/account/resource', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    const userData = userResponse.data;
    const userName = userData.name;
    const userEmail = userData.email;

    // Step 3: Check if the customer exists in Shopify
    const existingCustomer = await shopifyService.checkIfShopifyCustomerExists(userEmail);

    if (existingCustomer) {
      // If the customer exists, log in the user and show a welcome message
      return res.send(`Welcome back, ${existingCustomer.first_name}!`);
    } else {
      // If the customer doesn't exist, create a new Shopify customer
      const newCustomer = await shopifyService.createShopifyCustomer(userEmail, userName);
      return res.send(`Welcome, ${newCustomer.customer.first_name}. Your Shopify account has been created.`);
    }
  } catch (error) {
    console.error('Error during CSC authentication flow:', error);
    return res.status(500).send('Error during CSC authentication flow.');
  }
}

module.exports = {
  handleCscCallback,
};
