const { StatusCodes } = require("http-status-codes");
const {PrismaClient}=require("../../generated/prisma");


const client=new PrismaClient();

const createCity=async (req,res)=>{
    const name=req.body.name;
    try{
        const response= await client.city.create({
            data:{
                name
            }
        })
        res.status(StatusCodes.OK).json({
            data:response
        })
    }
    catch(err){
        res.status(StatusCodes.BAD_REQUEST).json({
            error:err
        })
    }
}

module.exports={createCity}