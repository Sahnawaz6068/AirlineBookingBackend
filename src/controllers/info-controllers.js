const info =(req,res)=>{
    return res.json({
        success:true,
        message:"API Is LIVE",
        error:{},
        data:{}
    })
}

module.exports={
    info
}