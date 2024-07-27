import express from 'express';
import cors from 'cors';


const app = express();

//cors
app.use(cors());

//json
app.use(express.json());

//routes



export {app};