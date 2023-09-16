const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token,'secret');
        if(verify.username === "moodtrackrAdmin"){
            next();
        }else{
            return res.status(401).json({
                message:'Invalid Admin Authorization Error'
            })
        }
    }
    catch(error){
        return res.status(401).json({
            error:'Invalid Admin Authorization Error'
        })
    }
}