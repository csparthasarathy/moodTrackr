const express = require('express');
const router = express.Router();
const Questionnaire = require('../model/questionnaire')
const authCheck = require('../middleware/auth-check')

// To get all question list
router.get('/',authCheck,(req,res,next)=>{
   Questionnaire.find()
   .then(result=>{
    res.status(200).json({
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

// To get Questions by ID
// router.get('/:id',authCheck,(req,res,next)=>{
//     Questionnaire.findById(req.params.id)
//     .then(result=>{
//      res.status(200).json({
//         QuestionnaireList:result
//      })
//     })
//     .catch(err=>{
//      console.log(err);
//      res.status(500).json({
//          error:err
//      })
//     })
//  })

module.exports = router;