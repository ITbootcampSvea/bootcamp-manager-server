import mongoose, { Schema, Document} from 'mongoose';

export interface IUser extends Document{
    name:string,
    lastname:string,
    email:string,
    phone:string,
    username:string,
    password:string,
    img:string,
    active:boolean
}

export const UserSchema:Schema = new Schema({
    name:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    img:{type:String, required:true},
    active:{type:Boolean, required:true},
}, { versionKey: false, collection:'users'})

export default mongoose.model<IUser>('Users',UserSchema);