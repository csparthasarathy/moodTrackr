const mongoose = require('mongoose');

const userlistSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String
})
module.exports = mongoose.model("UserList",userlistSchema)