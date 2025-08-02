const express=require("express");
const {infoCntroller,userController, airplaneControllers}=require('../../controllers');
const router=express.Router();

router.use(express.json());
router.get('/info',infoCntroller.info);
router.post('/user',userController.createUser);
router.post('/create-airPlane',airplaneControllers.createAirplane);

module.exports=router;
