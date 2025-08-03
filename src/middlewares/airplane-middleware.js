const { StatusCodes } = require("http-status-codes");
const {ErrorResponse}=require("../utils/common")

function validateCreateRequest(req,res,next){
    ErrorResponse.error={explanation:'Model number not found in incomming request'};
   if(!req.body.modelNumber){
    res.status(StatusCodes.BAD_REQUEST)
    .json(ErrorResponse)
   }
   next();
}

module.exports=
{
    validateCreateRequest
}