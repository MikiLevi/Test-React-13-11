import { generateUserPassword } from '../../dist/helpers/bcrypt'
import User, { IUser } from '../models/users';

const allStore = async () => {
	try {
		const allUsers = User.find();
		return allUsers;
	} catch (error) {
		throw new Error("Failed to find all users new user");
	}

};
const updateItem = async (userData: IUser) => {
	try {
		const newUser = await User.findByIdAndUpdate(userData.id, userData, { new: true })
	} catch (error) {
		throw new Error("error to edit user")
	}
}
export { allStore , updateItem };