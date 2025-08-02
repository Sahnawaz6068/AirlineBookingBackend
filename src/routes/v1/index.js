const express=require("express");
const {infoCntroller,userController}=require('../../controllers');
const router=express.Router();

router.use(express.json());
router.get('/info',infoCntroller.info);
router.post('/user',userController.createUser);

module.exports=router;
