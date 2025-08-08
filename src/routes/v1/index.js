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

router.get("/getAirplanes",airplaneControllers.getAirplanes);

router.get("/getAirplane/:id",airplaneControllers.getAirplane);

router.delete("/airplane/:id",airplaneControllers.deleteAirlplane);

router.patch("/updateAirplane/:id",airplaneControllers.updateAirplane);

module.exports = router;
