import express, { IRouter, Request, Response } from 'express'
import { allMissils, buyMissille } from '../services/storeService';

const router: IRouter = express.Router()

router.get('/', async (req: Request, res: Response): Promise<void> => {
	try {
		const allStoreFromDb = await allMissils()
		res.json(allStoreFromDb)
	} catch (error: any) {
		console.error(error.message);
	}
});


router.patch('/buy/:id', async (req: Request, res: Response): Promise<void> => {
	try {
		const newitem = req.body
		const editItem = await buyMissille(newitem)
		res.json(editItem)
	} catch (error: any) {
		console.error(error.message);
	}
});

export default router
