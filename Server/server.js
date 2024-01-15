const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res)=>{
    res.json("Welcome to the Server!");
})

app.listen(process.env.PORT_NUMBER, (err)=>{
    if(!err){
        console.log("Server is Up & Running on port ",process.env.PORT_NUMBER, " ✅");
    }else{
        console.log("Error Connecting to the server ❌")
    }
})