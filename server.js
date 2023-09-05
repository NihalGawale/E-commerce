const app = require('./app');
require('dotenv').config({path:"./config/.env"});

const connection = require('./config/databaseConnection')
connection();


app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})