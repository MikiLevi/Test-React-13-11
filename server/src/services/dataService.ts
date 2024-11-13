import { generateUserPassword } from '../../dist/helpers/bcrypt'
import User, { IUser } from '../models/users';

const allUsers = async () => {
	try {
		const allUsers = User.find();
		return allUsers;
	} catch (error) {
		throw new Error("Failed to find all users new user");
	}
};

const userOne = async (userId: string) => {
	try {
		const user = await User.findById(userId);
		return user;
	} catch (error) {
		throw new Error("Failed to find user by id");
	}
};

const deleteUser = async (userId: IUser) => {
	try {
		const user = User.findByIdAndDelete(userId);
		if (!user) {
			throw new Error("User not find");
		}
		return user;
	} catch (error) {
		throw new Error("Failed to find user by id");
	}
};

const updateUser = async (userData: IUser) => {
	try {
		const newUser = await User.findByIdAndUpdate(userData.id, userData, { new: true })
	} catch (error) {
		throw new Error("error to edit user")
	}
}

const AddUser = async (userData:IUser) => {
    try {
        const nueUser = new User(userData)
        await nueUser.save()
        return nueUser
    } catch (error) {
        throw new Error("error to add")
        
    }

}
export { allUsers, AddUser, userOne, deleteUser,updateUser };