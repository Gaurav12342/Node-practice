const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hey, yo yo honey singh12345");
});

app.get("/something",(req,res)=>{
    res.send("Hey, The data of something..!");
});

app.post("/something",(req,res)=>{
    res.send("Hey, The data of dhanna pani is interted..!");
});

app.listen(process.env.PUBLIC_PORT);