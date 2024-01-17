const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true }).then(()=>{
<<<<<<< HEAD
    console.log("Successfully Connected to Database 🔥")
=======
    console.log("Successfully Connected to Database ✔")
>>>>>>> f22f3594aa3565a0ce1af0984437ff54075fa4ed
}).catch((error)=>{
    console.log("Error Connecting to Database ❌",error);
});


module.exports = connectDB;