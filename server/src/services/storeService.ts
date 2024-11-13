import { generateUserPassword } from '../../dist/helpers/bcrypt'
import Store, { IMissiles } from '../models/misslies';

// get all store
const allStore = async () => {
	try {
		const allStore = Store.find();
		return allStore;
	} catch (error) {
		throw new Error("Failed to find all users new user");
	}

};
// Function for buying weapons and updating the weapon at the user
const updateItem = async (userData: IMissiles) => {
	try {
		
	} catch (error) {
		throw new Error("error to edit user")
	}
}
export { allStore, updateItem };