const express = require("express");
const app = express();
const connectDB = require("./Config/mongodb");
const port = process.env.PORT || 3000;

require("dotenv").config();

app.get("/", (req, res)=>{
    res.json("Welcome to the Server!");
})

app.listen(port, (err)=>{
    if(!err){
        console.log("Server is Up & Running on port",port, "✔");
    }else{
        console.log("Error Connecting to the server ❌")
    }
})