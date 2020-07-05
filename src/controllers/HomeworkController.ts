import express, { Response, Request, NextFunction, response } from "express";
import HomeworkMasterModel from "../models/HomeworkMasterModel";

export function getHomeworkMasterByID(req:Request,res:Response){

}
export function getHomeworkMasterByGen(req:Request,res:Response){

}
export function createHomeworkMaster(req:Request,res:Response){
    
    return HomeworkMasterModel.create({
        title: req.body.title,
        author:req.body.author,
        dueto:req.body.dueto,
        file:req.body.file
    }).then(res.json);
}   
export function updateHomeworkMaster(){

}
export function updateHomeworkMasterByID(){

}