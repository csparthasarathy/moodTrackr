const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    question:String
})
module.exports = mongoose.model("Questionnaire",questionnaireSchema)