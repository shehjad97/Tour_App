
const express = require('express')
const { addBooking, bookingsByUserId, bookingDelete } = require('../controller/booking.controller')
const route = express.Router()

route.post('/add-to-cart', addBooking)
route.get('/carts/:id', bookingsByUserId)
route.delete('/delete/:id', bookingDelete)

module.exports = route