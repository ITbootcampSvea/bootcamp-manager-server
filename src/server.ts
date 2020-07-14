"use strict";
import express,{Application} from 'express'
import socketIO from 'socket.io';
import mongoose from 'mongoose';
import router from './routes/Routes';
import cors from 'cors';
require('dotenv/config')

const app:Application = express();
const port = process.env.PORT || 4000;

//Middlewares  -- promena
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());    

//test
app.use(express.static(__dirname + '/'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


//use API routes
app.use(router);

//Database
mongoose.connect(<string>process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true },()=>console.log('connected to database'));
mongoose.set('useCreateIndex', true);

//Start server
const server = app.listen(port,()=>console.log("server is running"));

//Start SocketIO
export const io = socketIO(server);


io.on("connect", socket => {
    console.log("socket connected");
            
});





