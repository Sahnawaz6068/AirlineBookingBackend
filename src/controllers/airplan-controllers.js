const { PrismaClient } = require("../generated/prisma");
const { StatusCodes } = require('http-status-codes');

const client = new PrismaClient();

const createAirplane = async (req, res) => {
    const { id, modelNumber, capacity } = req.body;

 
        // const airplan=await client.a

        res.status(StatusCodes.CREATED).json({
            msg: 'Airplane created successfully',
            data: airplane,
        });
  
};

module.exports = { createAirplane };
