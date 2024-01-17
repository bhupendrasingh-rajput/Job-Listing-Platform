const express = require("express");
const app = express();
const connectDB = require("./Config/mongodb");
const port = process.env.PORT || 3000;

require("dotenv").config();

app.get("/", (req, res)=>{
    res.json("Welcome to the Server!");
})

<<<<<<< HEAD

app.get("/health", (req, res)=>{
    res.json({
        service : "job listing server",
        status : "Active",
        time : new Date()
    })
})

app.listen(port, (err)=>{
    if(!err){
        console.log("Server is Up & Running on port",port, "🔥");
=======
app.listen(port, (err)=>{
    if(!err){
        console.log("Server is Up & Running on port",port, "✔");
>>>>>>> f22f3594aa3565a0ce1af0984437ff54075fa4ed
    }else{
        console.log("Error Connecting to the server ❌")
    }
})