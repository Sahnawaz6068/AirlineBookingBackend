const { PrismaClient } = require("../../generated/prisma");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { airplanValidator } = require("../utils/validator");
const { cli } = require("winston/lib/winston/config");
const client = new PrismaClient();

const createAirplane = async (req, res) => {
  const { id, modelNumber, capacity } = req.body;
  console.log(id, modelNumber, capacity);
  try {
    airplanValidator(req);
    const airplane = await client.airplane.create({
      data: {
        modelNumber,
        capacity: parseInt(capacity),
      },
    });
    SuccessResponse.data = airplane;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err.message;
    res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
};

const getAirplanes = async (req, res) => {
  try {
    const airplanes = await client.airplane.findMany();

    res.status(StatusCodes.OK).json({
      msg: airplanes,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: err,
    });
  }
};

const getAirplane = async (req, res) => {

  const id = req.params.id;
  try {
    const airplan = await client.airplane.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.status(StatusCodes.BAD_REQUEST).json({
      airplane: airplan,
    });
  } 
  catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      err: err,
    });
  }
};

module.exports = { createAirplane, getAirplanes,getAirplane };
