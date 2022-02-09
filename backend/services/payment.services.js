const Services = require("../model/Service.model");
const Payment = require("../model/payment.model");

const getTourPrices = async (tourId) => {
    const tour = await Services.findById(tourId);
    return tour
}
const addPaymentData = async (payload) => {
    const data = await Payment.create(payload);
    if (!data) {
        throw new Error("something went wrong")
    }
    return data
}

const getPaymentByUserId = async (userId) => {
    const data = await Payment.find({ userId: userId });
    if (!data) {
        throw new Error("something went wrong")
    }
    return data
}

module.exports = {
    getTourPrices, addPaymentData, getPaymentByUserId
}