import mongoose, { Schema, Document} from 'mongoose';

export interface IDashboardItem extends Document{
    title:string,
    author:string,
    editedby:string,
    datetime:Date,
    links:string[],
    description:string,
    generation:string
}

export const DashboardItemSchema:Schema = new Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    editedby:{type:String, required:false},
    datetime:{type:Date, required:true},
    links:{type:Array, required:false},
    description:{type:String, required:false},
    generation:{type:String, required:true}
}, { versionKey: false, collection:'dashboarditem'})

export default mongoose.model<IDashboardItem>('DashboardItem',DashboardItemSchema);