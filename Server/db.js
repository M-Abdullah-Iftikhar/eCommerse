const mongoose =  require('mongoose')

// Function to connect with Database......................................

const connecttomongoose = () => {
    return mongoose.connect("mongodb+srv://muhammadabdullahmughal740:12341234@clusterlast.h3mhf.mongodb.net/")
}

// y1E85MjLN8kl3lzj

module.exports = {connecttomongoose}