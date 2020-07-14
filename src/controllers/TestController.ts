import { Response, Request } from "express";
import TestMasterModal from "../models/TestMasterModal";
import TestStudentModal from "../models/TestStudentModal";
import messagesIO from "../utils/messagesIO";
import { io } from "../server";


//----------------------TestMaster-----------------------

export async function createTestMaster(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.create(req.body);
        io.emit(messagesIO.newTest ,test);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}   

export async function updateTestMaster(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.updateOne({_id:req.params.id},{$set:req.body});
        io.emit(messagesIO.editTest ,test);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}

export async function deleteTestMaster(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.deleteOne({_id:req.params.id});
        io.emit(messagesIO.deleteTest ,test);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}

export async function getTestMasters(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.find(req.body);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}

export async function getTestMasterByID(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.findById(req.params.id);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}




//----------------------TestStudent-----------------------

export async function createTestStudent(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.create(req.body);
        //io.emit(messagesIO.newTest ,test);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}   

export async function updateTestStudent(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.updateOne({_id:req.params.id},{$set:req.body});
        //io.emit(messagesIO.newTest ,test);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}

export async function deleteTestStudent(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.deleteOne({_id:req.params.id});
        //io.emit(messagesIO.newTest ,test);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}

export async function getTestStudents(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.find(req.body);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}

export async function getTestStudentByID(req:Request,res:Response){
    try{    
        const test = await TestMasterModal.findById(req.params.id);
        res.json(test);
    }
    catch(err){
        res.status(500).json({message:err});
    }
}