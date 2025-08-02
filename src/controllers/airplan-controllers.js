const { PrismaClient } = require("../../generated/prisma");
const { StatusCodes } = require('http-status-codes');

const client = new PrismaClient();

const createAirplane = async (req, res) => {
    const { id, modelNumber, capacity } = req.body;

 try{
    const airplane=await client.airplane.create({
            data:{
                id:parseInt(capacity),
                modelNumber,
                capacity:parseInt(capacity)
            }
        })

        res.status(StatusCodes.CREATED).json({
            msg: 'Airplane created successfully',
            data: airplane,
        });
 }
 catch(err){
    res.status(StatusCodes.BAD_REQUEST).json({
        error:err
    })
 }
        
  
};

module.exports = { createAirplane };
