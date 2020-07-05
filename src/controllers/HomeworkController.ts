import { Response, Request } from "express";
import HomeworkMasterModel from "../models/HomeworkMasterModel";
import HomeworkStudentModel from "../models/HomeworkStudentModel";

//----------HomeworkMaster Controllers---------------------

export function getHomeworkMasterByID(req:Request,res:Response){

}
export function getHomeworkMasterByGen(req:Request,res:Response){

}
export function getHomeworkMasterByAuthor(req:Request,res:Response){

}
export async function createHomeworkMaster(req:Request,res:Response){
    const homework = await HomeworkMasterModel.create({
        title: req.body.title,
        generation: req.body.generation,
        author:req.body.author,
        dueto:req.body.dueto,
        file:req.body.file,
        description: req.body.description
    });
    res.json(homework);
}   

export function updateHomeworkMasterByID(){
    
}


//----------HomeworkStudent Controllers---------------------

export function getHomeworkStudentByStudentID(req:Request,res:Response){

}

export async function createHomeworkStudent(req:Request,res:Response){
    const homework = await HomeworkStudentModel.create({
        studentID:req.body.studentID,
        masterID:req.body.masterID,
        gitLink:req.body.gitLink,
        comment:req.body.comment,
        suggestion:req.body.suggestion,
        status:req.body.status
    });
    res.json(homework);
}   

export function updateHomeworkStudentByStudentID(){
    
}