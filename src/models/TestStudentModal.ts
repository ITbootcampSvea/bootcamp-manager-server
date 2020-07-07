import mongoose, { Schema, Document} from 'mongoose';

export interface ITestStudent extends Document{
    studentID:string,
    masterID:string,
    result:number,
    suggestion:string
    
}

const TestStudentSchema:Schema = new Schema({
    studentID:{type:String, required: true},
    masterID:{type:String, required: true},
    result:{type: Number, required:true},
    suggestion:{type:String, required:false}
}, { versionKey: false})
export default mongoose.model<ITestStudent>('TestStudent',TestStudentSchema);