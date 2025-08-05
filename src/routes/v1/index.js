const express = require("express");
const {
  infoCntroller,
  userController,
  airplaneControllers,
} = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

router.use(express.json());
router.get("/info", infoCntroller.info);
router.post("/user", userController.createUser);


router.post(
  "/create-airPlane",
  AirplaneMiddlewares.validateCreateRequest,
  airplaneControllers.createAirplane
);

router.get("/getAirplane",airplaneControllers.getAirplane);

module.exports = router;
