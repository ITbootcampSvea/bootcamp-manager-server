import { Response, Request } from "express";
import DashboardItemModel from "../models/DashboardItemModel";



//----------HomeworkMaster Controllers---------------------


export async function createDashboardItem(req:Request,res:Response){
    try{
        const item = await DashboardItemModel.create({...req.body, datetime: new Date()});
        res.json(item);
    }
    catch (err){
        res.json({message: err});
    }
} 

export async function getDashboardItems(req:Request,res:Response){
    try{
        const items = await DashboardItemModel.find(req.body);
        res.json(items);
    }
    catch (err){
        res.json({message: err});
    }
}



export async function getDashboardItemByID(req:Request,res:Response){
    try{
        const item = await DashboardItemModel.findById(req.params.id);
        res.json(item);
    }
    catch (err){
        res.json({message: err});
    }
}


export async function updateDashboardItemByID(req:Request,res:Response){
    try{
        const item = await DashboardItemModel.updateOne({_id:req.params.id},{$set:req.body});
        res.json(item);
    }
    catch (err){
        res.json({message: err});
    }
}

export async function deleteDashboartItemByID(req:Request,res:Response){
    try{
        const item = await DashboardItemModel.deleteOne({_id:req.params.id});
        res.json(item);
    }
    catch (err){
        res.json({message: err});
    }
}