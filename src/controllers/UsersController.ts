import { Response, Request } from "express";
import StudentModel from "../models/StudentModel";
import UserModel from "../models/UserModel";



export async function createStudent(req:Request,res:Response){
    const student = await UserModel.create(req.body);
    res.json(student);
}   