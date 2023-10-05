const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    date:Date,
    username:String,
    stress:String,
    anxiety:String
})
module.exports = mongoose.model("Userfeelings",userSchema)