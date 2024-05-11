const mongoose = require('mongoose');

const connectDB =  (url) => {
    mongoose.set('strictQuery',true)
    mongoose.connect(url)
    .then(() => console.log('Connected to database')).catch((err) => console.log(err))
}


module.exports = connectDB