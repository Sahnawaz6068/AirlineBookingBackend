const { StatusCodes } = require("http-status-codes");
const { PrismaClient } = require("../generated/prisma");

const client = new PrismaClient();
const createUser = async (req, res) => {
  console.log("requesr reches");
  const { userName, email, password,id } = req.body;
  console.log(userName, email, password);

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
};

module.exports = {
  createUser,
};
