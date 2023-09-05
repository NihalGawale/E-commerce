const app = require('./app');

//Handling Uncaught Exceptions

process.once('uncaughtException',(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to uncaught exception: ${err.stack}`);
    process.exit(1);
})

require('dotenv').config({path:"./config/.env"});

const connection = require('./config/databaseConnection')
connection();


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})

//Handling Unhandled Promise Rejection 

process.once("unhandledRejection",(err) => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    });

})