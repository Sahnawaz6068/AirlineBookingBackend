const { StatusCodes } = require("http-status-codes");
const {PrismaClient}=require("../../generated/prisma");
const { cli } = require("winston/lib/winston/config");


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

const deleteCity=async (req,res)=>{
    const id=req.params.id;
    try{
        const findCity=await client.city.findUnique({
            where:{
                id:parseInt(id)
            }
        })
        if(!findCity){
            throw new Error(`CIty with this id ${id} does not exist`);
        }
        const response=await client.city.delete({
            where:{
                id:parseInt(id)
            }
        })
        res.status(StatusCodes.OK).json({
            msg:response
        })
    }catch(err){
        res.status(StatusCodes.BAD_REQUEST).json({
            error:err.message
        })
    }
}

const updateCity=async (req,res)=>{
     const id=parseInt(req.params.id);
     const name=req.body.name;
    try{
        const findCity=await client.city.findUnique({
            where:{
                id:id
            }
        })
        if(!findCity){
            throw new Error(`CIty with this id ${id} does not exist`);
        }
        const updateResponse=await client.city.update({
            where:{
                id
            },
            data:{
                name:name
            }
        })
        res.status(StatusCodes.OK).json({
            msg:"city updated successfully",
            response:updateResponse
        })
    }catch(err){
        res.status(StatusCodes.BAD_REQUEST).json({
            error:err.message
        })
    }
}

module.exports={createCity,deleteCity,updateCity}