const { StatusCodes } = require("http-status-codes");
const { PrismaClient } = require("../generated/prisma");
const { ErrorResponse } = require("../utils/common");
const { userSignupValidator } = require("../utils/validator");

const client = new PrismaClient();
const createUser = async (req, res) => {
  console.log("requesr reches");
  const { userName, email, password,id } = req.body;
  console.log(userName, email, password);
 try{
    userSignupValidator(req);
    const newUser=await client.user.create({
    data: {
      userName: userName,
      password: password,
      email: email,
      id:parseInt(id)
    },
  });

  res.status(StatusCodes.OK).json({
    msg: "user created successfully",
  });
 }catch(err){
  ErrorResponse.error=err.message;
  res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
 }
};
module.exports = {
  createUser,
};
