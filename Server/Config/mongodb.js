const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true }).then(()=>{
    console.log("Successfully Connected to Database ✔")
}).catch((error)=>{
    console.log("Error Connecting to Database ❌",error);
});


module.exports = connectDB;