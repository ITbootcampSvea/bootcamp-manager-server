import { Response, Request } from "express";
import HomeworkMasterModel from "../models/HomeworkMasterModel";
import HomeworkStudentModel from "../models/HomeworkStudentModel";
import { io } from "../server";
import messagesIO from "../utils/messagesIO";


//----------HomeworkMaster Controllers---------------------


export async function createHomeworkMaster(req:Request,res:Response){
    try{
        const homework = await HomeworkMasterModel.create(req.body);
        io.emit(messagesIO.newHomework ,homework); 
        res.json(homework);
    }
    catch (err){
        res.status(500).json({message: err});
    }
} 

export async function getHomeworkMasters(req:Request,res:Response){
    try{
        const homeworks = await HomeworkMasterModel.find(req.body);
        res.json(homeworks);
    }
    catch (err){
        res.status(500).json({message: err});
    }
}

export async function getHomeworkMasterByID(req:Request,res:Response){
    try{
        const homework = await HomeworkMasterModel.findById(req.params.id);
        res.json(homework);
    }
    catch (err){
        res.status(500).json({message: err});
    }
}


export async function updateHomeworkMasterByID(req:Request,res:Response){
    try{
        const homework = await HomeworkMasterModel.updateOne({_id:req.params.id},{$set:req.body});
        io.emit(messagesIO.editHomework ,homework); 
        res.json(homework);
    }
    catch (err){
        res.status(500).json({message: err});
    }
}

export async function deleteHomeworkMasterByID(req:Request,res:Response){
    try{
        const homework = await HomeworkMasterModel.deleteOne({_id:req.params.id});
        io.emit(messagesIO.deleteHomework ,homework); 
        res.json(homework);
    }
    catch (err){
        res.status(500).json({message: err});
    }
}


//----------HomeworkStudent Controllers---------------------



export async function getHomeworkStudentByID(req:Request,res:Response){
    try{
        const homework = await HomeworkStudentModel.findById(req.params.id);
        res.json(homework);
    }
    catch (err){
        res.json({message: err});
    }   
}

export async function getHomeworkStudents(req:Request,res:Response){
    try{
        const homeworks = await HomeworkStudentModel.find(req.body);
        res.json(homeworks);
    }
    catch (err){
        res.json({message: err});
    }
}

export async function createHomeworkStudent(req:Request,res:Response){
    try{
        const homework = await HomeworkStudentModel.create(req.body);
        res.json(homework);
    }
    catch (err){
        res.json({message: err});
    }
    
}   

export async function updateHomeworkStudentByID(req:Request,res:Response){
    try{
        const homework = await HomeworkMasterModel.updateOne({_id:req.params.id},{$set:req.body});
        res.json(homework);
    }
    catch (err){
        res.json({message: err});
    }
}