const express = require('express');
const cookieParser = require('cookie-parser');
const axios = require('axios');  // For making API requests to exchange the code
const app = express();
const port = 3000;

// Define the CSC credentials
const CLIENT_ID = '072eaf48-1e2b-4c42-cc2c-86a00796e2c2';
const CLIENT_SECRET = 'oWi4ZxyNbE5D';
const REDIRECT_URI = 'http://localhost:3000/callback';  // The redirect URI for the callback
const TOKEN_ENDPOINT = 'https://connect.csc.gov.in/account/token';

// Define the CSC login URL (to be redirected from Node.js to PHP)
const PHP_LOGIN_URL = 'http://localhost/Connect_v1/User.php'; // This should be the PHP route to start the login flow

// Middleware to parse cookies
app.use(cookieParser());

// Step 1: Redirect to PHP to handle the login
app.get('/login', (req, res) => {
    // Redirect user to the PHP page for CSC login
    res.redirect(PHP_LOGIN_URL);
});

// Step 2: Handle the callback from CSC after user is authenticated
app.get('/callback', async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send('Authorization code is missing.');
    }

    try {
        // Exchange the authorization code for an access token
        const tokenResponse = await axios.post(TOKEN_ENDPOINT, {
            grant_type: 'authorization_code',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
            redirect_uri: REDIRECT_URI,
        });

        // Extract the access token
        const accessToken = tokenResponse.data.access_token;

        // Optionally, you can store this token in a session or a cookie
        res.cookie('access_token', accessToken, { httpOnly: true, secure: false });  // Make `secure: true` in production with HTTPS

        // Respond to the user or redirect to another page
        res.send('Login successful. You are now authenticated.');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during the token exchange.');
    }
});

// Step 3: Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
