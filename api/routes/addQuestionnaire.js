const express = require('express');
const router = express.Router();
const Questionnaire = require('../model/questionnaire')
const mongoose = require('mongoose');
const adminAuthCheck = require('../middleware/admin-auth-check');

// to Post the question List in array format
router.post('/',adminAuthCheck,(req,res,next)=>{
    const questionnaire = new Questionnaire({
     _id:new mongoose.Types.ObjectId,
     question:req.body.question
    })
    questionnaire.save()
    .then(result=>{
     console.log(result);
     res.status(200).json({
         newQuestion: result
     })
    })
    .catch(err=>{
     console.log(err);
     res.status(500).json({
         error:err
     })
    })
 }) 

// To Delete Questions by ID
router.delete('/:id',adminAuthCheck,(req,res,next)=>{
    Questionnaire.findOneAndRemove(({_id:req.params.id}))
    .then(result=>{
     res.status(200).json({
        message:"Deleted Successfully",
        QuestionnaireList:result
     })
    })
    .catch(err=>{
     console.log(err);
     res.status(500).json({
         error:err
     })
    })
 }) 

// To Update Questions by ID
router.put('/:id',adminAuthCheck,(req,res,next)=>{
    Questionnaire.findOneAndUpdate(({_id:req.params.id},{
        $set:{
            question:req.body.question
        }
    }))
    .then(result=>{
     res.status(200).json({
        message:"Updated Successfully",
        QuestionnaireList:result
     })
    })
    .catch(err=>{
     console.log(err);
     res.status(500).json({
         error:err
     })
    })
 }) 

module.exports = router;