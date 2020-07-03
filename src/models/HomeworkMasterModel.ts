import mongoose, { Schema, Document} from 'mongoose';

export interface IHomeworkMaster extends Document{
    title:string,
    author:string,
    dueto:number,
    file:string[],
}

const HomeworkMasterSchema:Schema = new Schema({
    title:{type:String, required: true, unique:true},
    author:{type: String, required:true},
    dueto:{type:String, required:true},
    file:{type:Array, required:false}
})
export default mongoose.model<IHomeworkMaster>('HomeworkMaster',HomeworkMasterSchema);