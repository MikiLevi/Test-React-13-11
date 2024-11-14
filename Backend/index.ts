import express, { Express } from "express";
import 'dotenv/config';
import router from "./router/router";
import mongoose from "mongoose";
import loadInitialData from "./helpers/loadInitialData";
import cors from 'cors'



const app: Express = express();

loadInitialData();
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));

app.use(express.json()) 
app.use(router)

mongoose.connect(process.env.MONGO_URI || "", {
	dbName: process.env.DB_NAME
})
	.then(() => console.log("Conncted To db"))
	.catch((error) => {
		console.error("error to concted", error);
	})
app.listen(process.env.PORT || 8000, () => {
	console.log(`listening on: http://localhost:${process.env.PORT || 8000}`);
});
