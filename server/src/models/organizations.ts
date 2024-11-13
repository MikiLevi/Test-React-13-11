import mongoose, { Schema } from "mongoose";

interface IOrganization {
	name: string;
	resources: IResources;
	budget: number;
}

interface IResources {
	name: string;
	amount: number;
}

const organizationSchema: Schema = new Schema({
	name: { type: String, required: true },
	resources: { type: [], required: true },
	budget: { type: Number, required: true },
});
const iresourcesShema: Schema = new Schema({
	name: { type: String, required: true },
	amount: { type: Number, required: true },
});

export default mongoose.model<IOrganization>("Organization", organizationSchema);

