// import mongoose, { Schema } from "mongoose";

// export interface IMissiles {
// 	name: string;
// 	description: string;
// 	speed: number;
// 	intercepts: string[];
// 	price: number;
// }

// const missileSchema: Schema = new Schema({
// 	name: { type: String, required: true },
// 	description: { type: String, required: true },
// 	speed: { type: Number, required: true },
// 	intercepts: { type: [String], required: true },
// 	price: { type: Number, required: true },
// });

// export default mongoose.model<IMissiles>("Missile", missileSchema);

import mongoose, { Document, Schema } from "mongoose";

export interface IMissile extends Document {
	_id: string;
	name: string;
	description: string;
	speed: number;
	intercepts: [{ type: string }];
	price: number;
}

const missileSchema: Schema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	speed: { type: Number, required: true },
	intercepts: { type: [{ type: String }] },
	price: { type: Number, required: true },
});


export default mongoose.model<IMissile>("Missile", missileSchema); 