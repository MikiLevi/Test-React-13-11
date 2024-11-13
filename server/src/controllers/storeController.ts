import express, { IRouter, Request, Response } from 'express'
import { allStore,  updateItem } from '../services/storeService';

const router: IRouter = express.Router()

router.get('/', async (req: Request, res: Response): Promise<void> => {
	try {
		const allStoreFromDb = await allStore()
		res.json(allStoreFromDb)
	} catch (error: any) {
		console.error(error.message);
	}
});


router.patch('/patch/:id', async (req: Request, res: Response): Promise<void> => {
	try {
		const newitem = req.body
		const editItem = await updateItem(newitem)
		res.json('Patch is Update')
	} catch (error: any) {
		console.error(error.message);
	}
});

export default router