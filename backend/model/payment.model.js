const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    userName: { type: String, required: true, },
    userEmail: { type: String, required: true, },
    userId: { type: String, required: true, },
    tourId: { type: String, required: true, },
    tourPic: { type: String, required: true, },
    tourName: { type: String, required: true, },
    name: { type: String, required: true, },
    date: { type: Date, required: true, },
    person: { type: Number, required: true, },
    price: { type: Number, required: true, },
    services: { type: Number, required: true, },
    total: { type: Number, required: true, },
    paymentID: { type: String, required: true, },
    paymentDate: { type: Date, required: true, },
}, {
    timestamps: true
});
// Create the Payment model
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;