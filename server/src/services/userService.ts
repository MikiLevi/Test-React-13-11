import { CookieOptions, Response } from "express";
import { comparePassword } from "../../helpers/bcrypt"
import { generateAuthToken } from "../../helpers/jwt"
import User from "../models/users"
import { generateUserPassword } from "../../helpers/bcrypt"

const cookieConfig: CookieOptions = {
	httpOnly: true,          // הגנה מפני XSS - הקוקי לא נגיש דרך JavaScript בצד הלקוח
	secure: true,            // שליחת הקוקי רק בחיבור HTTPS
	sameSite: 'strict',      // הגנה מפני CSRF
	maxAge: 24 * 60 * 60 * 1000  // תוקף של יום אחד (במילישניות)
};
interface userDTO {
	name: string,
	password: string
}
export interface IUser {
	userName: string;
	password: string;
	Organizations: string;
	zone?: string;

};

const register = async (userData: IUser) => {
    try {
      const newUser = new User(userData);
      newUser.password = generateUserPassword(newUser.password)
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error("Failed to add new user");
    }
  };

const login = async (user: userDTO, res: Response) => {
	try {
		const foundUser = await User.findOne({ name: user.name })

		if (!foundUser) return console.log("User not found")
		const isPasswordCorrect = await comparePassword(user.password, foundUser.password)
		if (!isPasswordCorrect) return console.log("Incorrect password or Email");
return foundUser
	
	} catch (error) {
		throw new Error("Failed to login")
	}
}


const logout = (res: Response): void => {
	try {
		res.clearCookie("auth_token", {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
		});
	} catch (error) {
		console.log(error);
	}
};
export {
	login,
	logout,
	register
}