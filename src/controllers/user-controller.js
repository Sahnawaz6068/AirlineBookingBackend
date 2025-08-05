const { StatusCodes } = require("http-status-codes");
const { PrismaClient } = require("../generated/prisma");
const { ErrorResponse } = require("../utils/common");
const { userSignupValidator } = require("../utils/validator");

const client = new PrismaClient();

const createUser = async (req, res) => {
  console.log("requesr reches");

  const { userName, email, password, phoneNumber,id } = req.body;
  console.log(userName, email, password);

  try {
    userSignupValidator(req);

    const newUser = await client.user.create({
      data: {
        id:parseInt(id),
        userName: userName,
        password: password,
        email: email,
        phoneNumber: parseInt(phoneNumber),
      },
    });

    res.status(StatusCodes.OK).json({
      msg: "user created successfully",
    });
  } catch (err) {
    ErrorResponse.error = err.message;
    res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
};
module.exports = {
  createUser,
};
