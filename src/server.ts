"use strict";
import express,{Application} from 'express'
import http from 'http';
import socketIO from 'socket.io';
import mongoose from 'mongoose';
//import routes modules
import router from './routes/Routes';
import cors from 'cors';
require('dotenv/config')

const app:Application = express();
const port = process.env.PORT || 4000;

//Middlewares
app.use(cors());
app.use(express.json());    

//use API routes
app.use(router);

//Database
mongoose.connect(<string>process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true },()=>console.log('connected to database'));
mongoose.set('useCreateIndex', true);


const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
    
    console.log(socket);
            
});


app.listen(port,()=>console.log("server is running"));


