import { Response, Request } from "express";
import TestMasterModal from "../models/TestMasterModal";
import TestStudentModal from "../models/TestStudentModal";


//----------------------TestMaster-----------------------

export async function createTestMaster(req:Request,res:Response){
    const test = await TestMasterModal.create(req.body);
    res.json(test);
}   

//----------------------TestStudent-----------------------

export async function createTestStudent(req:Request,res:Response){
    const test = await TestStudentModal.create(req.body);
    res.json(test);
}   