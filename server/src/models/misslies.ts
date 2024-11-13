import mongoose, { Schema } from "mongoose";

interface IMissiles {
	name: string;
	description: string;
	speed: number;
	intercepts: string[];
	price: number;
}

const missileSchema: Schema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	speed: { type: Number, required: true },
	intercepts: { type: [String], required: true },
	price: { type: Number, required: true },
});

export default mongoose.model<IMissiles>("Missile", missileSchema);
