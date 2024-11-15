// import mongoose, { Document, Schema } from "mongoose";

// export interface IUser extends Document {
// 	userName: string;
// 	password: string;
// 	Organizations: IResources;
// 	zone?: string;
// };

// interface IResources {
// 	name: string;
// 	amount: number;
// };

// const userSchema: Schema = new Schema({
// 	userName: { type: String, required: true },
// 	password: { type: String, required: true },
// 	Organizations: { type: [], required: true },
// 	zone: { type: String }
// });

// const iresourcesShema: Schema = new Schema({
// 	name: { type: String, required: true },
// 	amount: { type: Number, required: true },
// });

// export default mongoose.model<IUser>("User", userSchema)

import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
	name: string;
	password: string;
	org: string;
	loction: string;
	resources?: [{ type: string }];
}
const userSchema: Schema = new Schema({
	name: { type: String, required: true },
	password: { type: String, required: true, },
	org: { type: String, required: true },
	loction: { type: String, require: true },
});


export default mongoose.model<IUser>("User", userSchema);
