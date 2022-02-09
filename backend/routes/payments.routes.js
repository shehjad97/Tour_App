const express = require('express');
const { createInstance, addPayment, paymentByUserId } = require('../controller/payment.controller');
const router = express.Router();

router.post('/create-payment-intent', createInstance)
router.post('/add-payment', addPayment)
router.get('/:id', paymentByUserId)

module.exports = router;