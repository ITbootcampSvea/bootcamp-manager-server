import express from 'express'
import http from 'http';
import socketIO from 'socket.io';


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
    
    console.log(socket);
            
});


"use strict";
console.log('Hello world');
