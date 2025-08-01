const express=require("express");
const router=express.Router();

router.get('/info',(req,res)=>{
    return res.json({
        msg:"everything is Just okey"
    })
})

module.exports=router;
