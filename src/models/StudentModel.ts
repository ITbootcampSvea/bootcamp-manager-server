import mongoose, { Schema } from 'mongoose';
import extend from 'mongoose-schema-extend';
import { IUser, UserSchema } from './UserModel';

export interface IStudent extends IUser{
    studentID:string,
    generation:string
}

const StudentSchema:Schema = extend(UserSchema,{
    studentID:{type:String, required:true, unique:true},
    generation:{type:String, required:true},
}, { versionKey: false })
export default mongoose.model<IStudent>('Users',StudentSchema);