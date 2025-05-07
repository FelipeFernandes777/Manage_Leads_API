import express from "express";
import router from "./routes";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
app.use(express.json());
app.use(router)
app.use(cors())
export default app;