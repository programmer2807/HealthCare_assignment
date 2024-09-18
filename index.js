const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const Services =require("./routes/Services");

app.use("/api/v1",Services);


app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
})

const dbConnect = require("./config/database");

dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1><i>This is Home Page of my sever</i></h1>`);
})