import { generateUserPassword } from '../../dist/helpers/bcrypt'
import Store, { IMissiles } from '../models/misslies';

const allStore = async () => {
	try {
		const allStore = Store.find();
		return allStore;
	} catch (error) {
		throw new Error("Failed to find all users new user");
	}

};
const updateItem = async (userData: IMissiles) => {
	try {
		const newStore = await Store.findByIdAndUpdate(userData, userData, { new: true })
	} catch (error) {
		throw new Error("error to edit user")
	}
}
export { allStore, updateItem };