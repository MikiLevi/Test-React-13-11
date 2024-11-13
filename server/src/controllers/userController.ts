import exprees, { IRouter, Request, Response } from "express";
import { login, logout, register } from "../services/userService";

const router: IRouter = exprees.Router();

router.post("/register", async (req: Request, res: Response): Promise<void> => {
	try{
	  const newUser = req.body
	  const addUser = register(newUser)
	  res.json(addUser);

	} catch (error: any) {
	  console.error(error.message);
	}
  });

router.post("/login", async (req: Request, res: Response): Promise<void> => {
	try {
		const user = req.body
		const userMan = await login(user,res)
		res.json(userMan)
	} catch (error: any) {
		console.error(error.message);
	}
});

router.post("/logout", (req: Request, res: Response): void => {
	try {
		logout(res);
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error: any) {
		console.error(error.message);
	}
});


export default router;