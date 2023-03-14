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

// convert this code to express based code
// const http = require('http')

// const requestListener = function (req, res) {
// 	res.writeHead(200)
// 	res.end('Hello, World!')
// }

// const server = http.createServer(requestListener)
// server.listen(process.env.PUBLIC_PORT)

app.get("/", (req, res) => {
    res.send("hello world12");
});

app.get("/what-is-my-method",(req,res)=>{
    res.send("GET");
});

app.post("/what-is-my-method",(req,res)=>{
    res.send("POST");
});

app.put("/what-is-my-method",(req,res)=>{
    res.send("PUT");
});

app.delete("/what-is-my-method",(req,res)=>{
    res.send("DELETE");
});

app.patch("/what-is-my-method",(req,res)=>{
    res.send("PATCH");
});

app.listen(process.env.PUBLIC_PORT);


//  Check fetch call on browser inspect 
// await fetch("/what-is-my-method",{method:"PATCH"}).then(res => res.text())