import express,{Application, Request, Response, NextFunction, Router} from 'express'
import http from 'http';
import socketIO from 'socket.io';
import mongoose from 'mongoose';
//import routes modules
import HomeworkStudentRoute from "./routes/HomeworkStudent";
import HomeworkMasterRoute from "./routes/HomeworkMaster";

const app:Application = express();
app.use(express.json());    

//use API routes
app.use('/homeworkstudent',HomeworkStudentRoute);
app.use('/homeworkmaster',HomeworkMasterRoute);

mongoose.connect('mongodb+srv://admin:admin@bootcamperclaster.4oxwb.mongodb.net/bootcamperDataBase?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>console.log('connected to database'));

// (mongodb+srv://admin:1234@bootcamperclaster.4oxwb.mongodb.net/<dbname>?retryWrites=true&w=majority)

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
    
    console.log(socket);
            
});


app.listen(5000,()=>console.log("server is running"));




"use strict";
console.log('Hello world');
