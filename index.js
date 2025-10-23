const express = require("express");
const http = require("http");
const app = express();

app.get('/', (req,res,next) => {
    return res.send("welcome express js")
})

app.get('/products', (req,res,next) => {
    // this is products route
    return res.json({
        status: 200,
        message: "success"
    })
})

/*
const server = http.createServer((req,res,next) => {
    res.end("welcome")
});

server.listen(5000);
*/

const server = app.listen(5000, (req,res,next) => {
    console.log("server running")
});