const path = require('path')
const dotenv = require('dotenv')


dotenv.config({ path: path.join(process.cwd(), '.env') })

module.exports = {
    port: process.env.PORT,
    MongooseUrl: process.env.MongooseUrl,
    STRIPE: process.env.STRIPE_SECRET_KEY,
}