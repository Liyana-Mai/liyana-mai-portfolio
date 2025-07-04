// This is your test secret API key.
const stripe = require("stripe")("sk_test_51RYpwq2aC06LT0QhZrS9X1yE38mvCUenbQFjs6rtpj1CNB3c2a14w4vTgcH5J9GlKNvm8hBvqjf2LJ1MZRFKHvhr002YW5hbWt", {
    apiVersion: "2025-05-28.basil",
  });
  const express = require("express");
  const app = express();
  app.use(express.static("public"));
  
  const YOUR_DOMAIN = "http://localhost:3000";
  
  app.post("/create-checkout-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "custom",
      line_items: [
        {
          // Provide the exact Price ID (e.g. price_1234) of the product you want to sell
          price: "{{PRICE_10}}",
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
  
    res.send({ clientSecret: session.client_secret });
  });
  
  app.get("/session-status", async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  
    res.send({
      status: session.status,
      customer_email: session.customer_details.email
    });
  });
  
  app.listen(4242, () => console.log("Running on port 4242"));