import { Response, Request } from "express";
import DashboardItemModel from "../models/DashboardItemModel";
import { io } from "../server";
import messagesIO from "../utils/messagesIO";


//----------HomeworkMaster Controllers---------------------



export async function createDashboardItem(req:Request,res:Response){
    try{
        const item = await DashboardItemModel.create({...req.body, datetime: new Date()});  
        io.emit(messagesIO.newDashCard ,item);              
        res.json(item);
        
    }
    catch (err){
        res.status(500).json({message: err});
    }
} 

export async function getDashboardItems(req:Request,res:Response){
    try{
        const items = await DashboardItemModel.find(req.body);
        res.json(items);
    }
    catch (err){
        res.status(500).json({message: err});
    }
}



export async function getDashboardItemByID(req:Request,res:Response){
    try{
        const item = await DashboardItemModel.findById(req.params.id);
        res.json(item);
    }
    catch (err){
        res.status(500).json({message: err});
    }
}


export async function updateDashboardItemByID(req:Request,res:Response){
    try{
        const item = await DashboardItemModel.updateOne({_id:req.params.id},{$set:req.body});
        io.emit(messagesIO.editDashCard ,item); 
        res.json(item);
    }
    catch (err){
        res.status(500).json({message: err});
    }
}

export async function deleteDashboartItemByID(req:Request,res:Response){
    try{
        const item = await DashboardItemModel.deleteOne({_id:req.params.id});
        io.emit(messagesIO.deleteDashCard ,item); 
        res.json(item);
    }
    catch (err){
        res.status(500).json({message: err});
    }
}