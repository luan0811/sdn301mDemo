const express = require('express')
// import express from 'express'
const http = require('http');
const hostname = 'localhost';
const port = 5000;
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const server = http.createServer(app);
const blackpinkRouter = require('./routes/Blackpink')


app.use('/blackpink',blackpinkRouter)
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
