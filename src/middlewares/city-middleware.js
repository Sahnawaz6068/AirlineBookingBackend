const { StatusCodes } = require("http-status-codes");
const {ErrorResponse}=require("../utils/common");

function validateCreateRequest(req,res,next){
    ErrorResponse.error={explanation:"City Not found in incooming request"};
    //For easy we can throw an error and set to res
    // throw new Error("City not found in request")
    if(!req.body.name){
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

module.exports={
    validateCreateRequest
}