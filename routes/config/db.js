const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const connectDB = ()=>{
    mongoose.connect(db,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        SUPPRESS_NO_CONFIG_WARNING:true
        
    })
    .then(()=>console.log('MongoDB is Connected'))
    .catch((err)=>console.log(err));
    process.exit(1);
}


module.exports = connectDB;

