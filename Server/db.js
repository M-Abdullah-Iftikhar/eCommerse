const mongoose =  require('mongoose')

// Function to connect with Database......................................

const connecttomongoose = () => {
    return mongoose.connect("mongodb+srv://hamzanaseer496:y1E85MjLN8kl3lzj@cluster0.0cdiu.mongodb.net/")
}

// y1E85MjLN8kl3lzj

module.exports = {connecttomongoose}