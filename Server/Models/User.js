const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    cartItem:{
        type:Object,
    },
    role:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model("user",userSchema)


module.exports = User;