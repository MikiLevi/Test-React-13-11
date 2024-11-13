import express, { IRouter, Request, Response } from 'express'
import { allUsers, updateUser } from '../services/dataService';

const router: IRouter = express.Router()

router.get('/', async (req: Request, res: Response): Promise<void> => {
	try {
		const allUsersFromDb = await allUsers()
		res.json(allUsersFromDb)
	} catch (error: any) {
		console.error(error.message);
	}
});


router.patch('/patch/:id', async (req: Request, res: Response): Promise<void> => {
	try {
		const newUser = req.body
		const editUser = await updateUser(newUser)
		res.json('Patch is Update')
	} catch (error: any) {
		console.error(error.message);
	}
});

export default router