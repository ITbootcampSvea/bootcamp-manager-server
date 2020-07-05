import mongoose, { Schema, Document} from 'mongoose';

export interface IHomeworkMaster extends Document{
    title:string,
    generation:string,
    author:string,
    dueto:number,
    file:string[],
    description:string
}

const HomeworkMasterSchema:Schema = new Schema({
    title:{type:String, required: true},
    generation:{type:String, required: true},
    author:{type: String, required:true},
    dueto:{type:String, required:true},
    file:{type:Array, required:false},
    description:{type:String, required:false}
}, { versionKey: false})
export default mongoose.model<IHomeworkMaster>('HomeworkMaster',HomeworkMasterSchema);