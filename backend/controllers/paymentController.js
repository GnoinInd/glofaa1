const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// This is your test secret API key.
// const stripe = require('stripe')('pk_test_51MrIJZSGYVf2mKx87wiN8hgZL2RdbIGYAVrKEBPQ3QFs3WOaPAAiJonvcODs09CLj4h5wUstUk6nt8TMOQlxEb1W00qlKRaL6E');




exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "glofaa.com",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
