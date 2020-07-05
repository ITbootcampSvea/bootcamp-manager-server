import mongoose, { Schema, Document} from 'mongoose';

type status = "assigned"|"submited"|"uncompleted"|"completed"|"undone";

export interface IHomeworkStudent extends Document{
    studentID:string,
    masterID:string,
    gitLink:string,
    comment:string,
    suggestion:string,
    status:status
}

const HomeworkStudentSchema:Schema = new Schema({
    studentID:{type:String, required: true},
    masterID:{type: String, required:true},
    gitLink:{type:String, required:true},
    comment:{type:String, required:true},
    suggestion:{type:String, required:false},
    status:{type:String, required:false}
}, { versionKey: false})
export default mongoose.model<IHomeworkStudent>('HomeworkStudent',HomeworkStudentSchema);