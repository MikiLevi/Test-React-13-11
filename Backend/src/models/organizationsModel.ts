// import mongoose, { Schema } from "mongoose";

// interface IOrganization {
// 	name: string;
// 	resources: IResources;
// 	budget: number;
// }

// interface IResources {
// 	name: string;
// 	amount: number;
// }

// const organizationSchema: Schema = new Schema({
// 	name: { type: String, required: true },
// 	resources: { type: [], required: true },
// 	budget: { type: Number, required: true },
// });

// const iresourcesShema: Schema = new Schema({
// 	name: { type: String, required: true },
// 	amount: { type: Number, required: true },
// });

// export default mongoose.model<IOrganization>("Organization", organizationSchema);


//// 2 


import mongoose, { Document, Schema } from "mongoose";

export interface IOrg extends Document {
	_id: string;
	name: string;
	resources: [{ type: string }];
	budget: number;
}

const resourcesSchema: Schema = new Schema({
	name: { type: String, required: true },
	amount: { type: Number, required: true },
});

const organizationSchema: Schema = new Schema({
	name: { type: String, required: true },
	resources: [resourcesSchema],
	budget: { type: Number, required: true },
});

export default mongoose.model<IOrg>("org", organizationSchema);

