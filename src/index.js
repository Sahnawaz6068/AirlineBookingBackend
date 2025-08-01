const express=require('express');
const {PORT}=require('./config');
const apiRoutes=require("./routes");

console.log(PORT);
const app=express();
app.use('/api',apiRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running on the port: ${PORT}`)
})