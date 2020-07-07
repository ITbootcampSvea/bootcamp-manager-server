import mongoose, { Schema, Document} from 'mongoose';

export interface ITestkMaster extends Document{
    title:string,
    generation:string,
    author:string,
    file:string[],
    description:string
}

const TestMasterSchema:Schema = new Schema({
    title:{type:String, required: true},
    generation:{type:String, required: true},
    author:{type: String, required:true},
    file:{type:Array, required:false},
    description:{type:String, required:false}
}, { versionKey: false})
export default mongoose.model<ITestkMaster>('TestMaster',TestMasterSchema);