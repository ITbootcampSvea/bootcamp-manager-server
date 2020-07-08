import { Response, Request } from "express";
import StudentModel from "../models/StudentModel";
import UserModel from "../models/UserModel";
import { ifError } from "assert";



export async function createStudent(req:Request,res:Response){
    try{
        const student = await UserModel.create({...req.body, active:true});
        res.json(student);
    }
    catch (err){
        res.json({message:err});
    }
}   


export async function updateStudent(req:Request,res:Response){
    try{
        const student = await UserModel.updateOne({_id:req.params.id},{$set:req.body})
        res.json(student);
    }
    catch (err){
        res.json({message:err});
    }
}   