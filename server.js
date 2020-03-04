const express = require("express");
const dotenv = require("dotenv");
const auth = require("./routes/auth")

const routes = require("./routes/index")
//Enviroment Variables
dotenv.config({
    path:"./config/env/config.en"
})

const app = express();

const PORT = process.env.PORT;

// Routers Middleware

app.use("/api", routes)

// app.get("/api/questions",(req,res) => {
//     res.send("Questions Home Page");
// })

// app.get("/api/auth",(req,res) => {
//     res.send("auth Home Page");
// })

app.get("/", (req,res)=>{
    res.send("Hello QA API");
})


app.listen(PORT,()=>{
    console.log(`APP Started on ${process.env.NODE_ENV}`);
})