import mongoose, { Schema, Document} from 'mongoose';

export interface IMessage extends Document{
    user:string,
    message:string
    time:Date,
}

export const UserSchema:Schema = new Schema({
    name:{type:String, required:true},
    message:{type:String, required:true},
}, { versionKey: false, collection:'messages'})

export default mongoose.model<IMessage>('Message',UserSchema);