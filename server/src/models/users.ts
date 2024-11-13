import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
	userName: string;
	password: string;
	Organizations: string;
	zone?: string;

};
const userSchema: Schema = new Schema({
	userName: { type: String, required: true },
	password: { type: String, required: true },
	Organizations: { type: String, required: true },
	zone: { type: String }
});

export default mongoose.model<IUser>("User", userSchema)