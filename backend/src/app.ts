//application code to be handled under app.ts
import express from 'express'
import {config} from "dotenv"

config();
const app  = express()


//middlewares
app.use(express.json());

export default app;