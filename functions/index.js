const dotenv = require("dotenv");
dotenv.config();

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// API

// App configuration
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-a4c40/us-central1/api
