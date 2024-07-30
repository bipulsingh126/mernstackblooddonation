import express from 'express';
import cors from 'cors';
import { router } from './routes/auth.js';
import DonorRoute from './routes/donor.js';
import ProspectRoute from './routes/prospect.js';

const app = express();

//cors
app.use(cors());

//json
app.use(express.json());

//routes
app.use("/api/v1/auth", router);
app.use("/api/v1/donors", DonorRoute);
app.use("/api/v1/prospects", ProspectRoute)

export {app};