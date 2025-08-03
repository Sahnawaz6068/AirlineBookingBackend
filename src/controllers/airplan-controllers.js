const { PrismaClient } = require("../../generated/prisma");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { airplanValidator } = require("../utils/validator");
const client = new PrismaClient();

const createAirplane = async (req, res) => {
  const { id, modelNumber, capacity } = req.body;
  console.log("---------------------------------------------jjjjj");
  try {
    airplanValidator(req);
    const airplane = await client.airplane.create({
      data: {
        id: parseInt(id),
        modelNumber,
        capacity: parseInt(capacity),
      },
    });
    SuccessResponse.data = airplane;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err.message;
    // console.log(err);
    res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
};

module.exports = { createAirplane };
