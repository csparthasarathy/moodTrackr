const express = require('express');
const router = express.Router();
const  Prediction= require('../model/modelpred')
const authCheck = require('../middleware/auth-check')

router.post('/',authCheck,(req,res,next)=>{
    const pred = new Prediction({...req.body})
    pred.save()
    .then(result=>{
     console.log(result);
     res.status(200).json({
        message:"Success"
     })
    })
    .catch(err=>{
     console.log(err);
     res.status(500).json({
         error:err
     })
    })
 })


//  router.get('/',authCheck,(req,res,next)=>{
//     pred.find()
//     .then(result=>{
//      res.status(200).json({
//         predList:result
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