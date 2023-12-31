// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:3000
//   node server.js

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_API_KEY);
const express = require('express');
const app = express();


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_39468678e2808f6cc5e332ca20cbcec4554e6b524d81e261c1abc185a1c2e796";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  console.log(`Unhandled event type ${event.type}`);

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(3000, () => console.log('Running on port 3000'));