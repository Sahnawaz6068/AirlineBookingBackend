const express=require('express');
const router=express.Router();

router.get('/info',(req,res)=>{
    res.json({
        msg:"Everything is okey again"
    })
})

module.exports=router
