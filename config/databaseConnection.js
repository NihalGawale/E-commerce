const mongoose = require('mongoose');

const connection = () => {

    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},{useUnifiedTopology:true}).then(()=>{
        console.log("Connection with database is established");
    }).then((data) => {
        console.log(`Mongodb connected with server`);
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = connection