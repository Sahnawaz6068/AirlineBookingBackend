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
    if(!airplan){
      throw new Error("With this id airplan not found");
    }
    res.status(StatusCodes.OK).json({
      airplane: airplan,
    });
  } 
  catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      err: err.message,
    });
  }
};

//delete airplan using plan id
const deleteAirlplane=async (req,res)=>{
  console.log("dlete kar bo")
  const idString=req.params.id;
  const id=parseInt(idString);
  try{
      const response=await client.airplane.delete({
    where:{
      id:id
    }
  })
  res.status(StatusCodes.OK).json({
    msg:"Airplan deleted sucessfully",
    res:response
  })
  }catch(err){
    res.status(StatusCodes.BAD_REQUEST).json({
      error:err
    })
  }

}

module.exports = { createAirplane, getAirplanes,getAirplane,deleteAirlplane };
