const Booking = require("../model/booking.model")

const createBooking = async (payload) => {

    const { userId, tourId, date, person } = payload

    // if the booking is same date and same tour increase the person
    const isExist = await Booking.findOne({ tourId, date, userId })
    if (!isExist) {
        const data = await Booking.create(payload)
        if (!data) {
            throw new Error('booking is not created')
        }
        return data
    } else {
        const data = await Booking.updateOne({ tourId, date, userId }, { person: isExist.person + Number(person) })
        return data
    }

}
const getBookingsByUserId = async (id) => {
    const data = await Booking.find({ userId: id }).sort({ createdAt: -1 })
    return data
}

const deleteBooking = async (id) => {
    const data = await Booking.findByIdAndDelete(id)
    return data
}


module.exports = {
    createBooking, getBookingsByUserId, deleteBooking
}