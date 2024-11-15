import Missile, { IMissile } from "../models/missliesModel";
import orgModel, { IOrg } from "../models/organizationsModel";

interface buyUserDto {
	name: string,
	missileName: string,
	orgName: string
}
export const allMissils = async () => {
	try {
		const allMissils = Missile.find();
		return allMissils;
	} catch (error) {
		throw new Error("error to find users");
	}
};


export const buyMissille = async (buyUser: buyUserDto) => {
	const missile = await Missile.findOne({ name: buyUser.missileName });
	const org: any | null = await orgModel.findOne({ name: buyUser.orgName });
	const price: number | undefined = missile?.price;
	const Budget: number | undefined = org?.budget;

	if (Budget! < price!) return console.log("you don't have enough money");
	const resources: any = org!.resources;
	const resourceSingel: any = resources.find((m: any) => m.name === missile?.name)


	if (resourceSingel) {
		resourceSingel.amount++;
		org!.Budget = org!.Budget - price!;
		console.log(resourceSingel, org!.Budget);
		org.save();


		return buyUser;
	} else {
		console.log("User not found");
	}
}; 