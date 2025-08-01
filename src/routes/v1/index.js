const express=require("express");
const {infoCntroller}=require('../../controllers');
const router=express.Router();

router.get('/info',infoCntroller.info);

module.exports=router;
