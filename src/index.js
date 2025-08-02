const express=require('express');
const apiRoutes=require("./routes");
const {serverConfig,logger}=require("./config");


const app=express();
app.use('/api',apiRoutes);

console.log(serverConfig.PORT);

app.listen(serverConfig.PORT,()=>{
    console.log(`The server is running on the port: ${serverConfig.PORT}`);
    logger.info("sucessfully started server","root",{});
})