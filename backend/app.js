import express from 'express';
import cors from 'cors';
import { router } from './routes/auth.js';


const app = express();

//cors
app.use(cors());

//json
app.use(express.json());

//routes
app.use("/api/v1/auth", router)


export {app};