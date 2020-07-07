import mongoose, { Schema } from 'mongoose';
import extend from 'mongoose-schema-extend';
import { IUser, UserSchema } from './UserModel';

export interface IProfessor extends IUser{
    generations:string[]
}

const ProfessorSchema:Schema = extend(UserSchema,{
    generations:{type:Array, required:true},
}, { versionKey: false })
export default mongoose.model<IProfessor>('Users',ProfessorSchema);