const express = require('express')
const cors = require('cors')
const globalErrorHandler = require('./middleware/globalErrorHandler')
const noRouteFound = require('./middleware/noRoute')
const servicesRoute = require('./routes/Services.route')
const commentRoutes = require('./routes/comment.route')
const userRoute = require('./routes/user.route')
const bookingRoute = require('./routes/booking.route')
const paymentRoute = require('./routes/payments.routes')

const app = express()

app.use(cors())
app.use(express.json())

// basic text :
app.get('/', (req, res) => {
    // throw new ApiError(404, "test error")
    res.status(200).json("server is working")
})

// routes :
app.use('/api/v1/user/', userRoute)
app.use('/api/v1/services/', servicesRoute)
app.use('/api/v1/comments/', commentRoutes)
app.use('/api/v1/booking/', bookingRoute)
app.use('/api/v1/payment/', paymentRoute)

app.use(globalErrorHandler)
app.use(noRouteFound)

module.exports = app;