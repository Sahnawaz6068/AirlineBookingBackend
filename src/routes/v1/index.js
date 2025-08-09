const express = require("express");
const {
  infoCntroller,
  userController,
  airplaneControllers,
  cityController,
} = require("../../controllers");
const { AirplaneMiddlewares, CityMiddleware } = require("../../middlewares");
const router = express.Router();

router.use(express.json());

//General Routes
router.get("/info", infoCntroller.info);
router.post("/user", userController.createUser);


//Airplane Routes

//Post Route
router.post(
  "/create-airPlane",
  AirplaneMiddlewares.validateCreateRequest,
  airplaneControllers.createAirplane
);
//Get all Airplane Routes
router.get("/getAirplanes", airplaneControllers.getAirplanes);
//Get Airplane by airplane id
router.get("/getAirplane/:id", airplaneControllers.getAirplane);
//Delete airplane by airplane id
router.delete("/airplane/:id", airplaneControllers.deleteAirlplane);
//Update airplane by airplane id
router.patch("/updateAirplane/:id", airplaneControllers.updateAirplane);

//City Routes
router.post("/cities",CityMiddleware.validateCreateRequest,cityController.createCity);
//delete city
router.delete("/cities/:id",cityController.deleteCity);
//update city
router.patch("/cities/:id",cityController.updateCity);


module.exports = router;