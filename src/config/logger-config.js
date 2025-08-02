const {createLogger,format,transports}=require('winston');

const {combine,timestamp,printf,label}=format;

const customFormat=printf(({level,message,timestamp})=>{
    return `${timestamp}:[${message}]:[${level}]`;
})

const logger =createLogger({
    format:combine(
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        customFormat
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:'combine.log'})
    ]
})

module.exports=logger