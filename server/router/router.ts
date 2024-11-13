import express, { IRouter } from "express";
import storeController from '../src/controllers/storeController'

const router: IRouter = express.Router()

router.use('/data', storeController)


export default router