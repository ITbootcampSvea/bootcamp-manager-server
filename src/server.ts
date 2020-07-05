"use strict";
import express,{Application, Router} from 'express'
import http from 'http';
import socketIO from 'socket.io';
import mongoose from 'mongoose';
//import routes modules
import router from './routes/HomeworkRoute';

const app:Application = express();
app.use(express.json());    

//use API routes
app.use(router);

mongoose.connect('mongodb+srv://admin:admin@bootcamperclaster.4oxwb.mongodb.net/bootcamperDataBase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },()=>console.log('connected to database'));

// (mongodb+srv://admin:1234@bootcamperclaster.4oxwb.mongodb.net/<dbname>?retryWrites=true&w=majority)

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
    
    console.log(socket);
            
});


app.listen(4000,()=>console.log("server is running"));


