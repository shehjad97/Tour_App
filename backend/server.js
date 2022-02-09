const mongoose = require('mongoose')


const { port, MongooseUrl } = require('./utils/env.config');
const app = require('./app');


const connectServer = () => {
    try {
        mongoose.connect(MongooseUrl)
            .then(() => {
                console.log("database connected");
                app.listen(port, console.log(`App is running ${port}`))
            })
    } catch (error) {
        console.log(error.message);

    }
}

connectServer()