import express, { IRouter } from "express";
import storeController from '../src/controllers/storeController';
import userController from '../src/controllers/userController';

const router: IRouter = express.Router()

router.use('/store', storeController)
router.use('/user', userController)


export default router