const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const questionRoute = require('./api/routes/questionnaire')
const adminQuestionRoute = require('./api/routes/addQuestionnaire')
const userRoute =require('./api/routes/user');
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://moodtrackr:moodtrackr1@moodtrackr.hwwdhdl.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")

mongoose.connection.on('error',err=>{
    console.log("Connection Failed")
})
mongoose.connection.on('connected',err=>{
    console.log("Connected to the Database")
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use("/questionnaire",questionRoute)
app.use("/adminquestionnaire",adminQuestionRoute)
app.use("/userList",userRoute)

// Error Message for wrong URL
app.use((req,res,next)=>{
    res.status(404).json({
        error:'URL does not exist'
    })
})

module.exports = app