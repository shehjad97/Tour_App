const { getTourPrices, addPaymentData, getPaymentByUserId } = require("../services/payment.services");
const catchAsync = require("../utils/catchAsync");
const { STRIPE } = require("../utils/env.config");
const sandResponse = require("../utils/sandResponse");

const stripe = require("stripe")(STRIPE);

const createInstance = catchAsync(async (req, res) => {
    const { price } = req.body;
    const amount = price * 100;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

const addPayment = catchAsync(async (req, res) => {
    const data = await addPaymentData(req.body)
    sandResponse(res, {
        statusCode: 200,
        success: true,
        message: "successfully  added data",
        data: data
    })
});

const paymentByUserId = catchAsync(async (req, res) => {
    const data = await getPaymentByUserId(req.params.id)
    sandResponse(res, {
        statusCode: 200,
        success: true,
        message: "successfully  added data",
        data: data
    })
});



module.exports = {
    createInstance, addPayment, paymentByUserId
}