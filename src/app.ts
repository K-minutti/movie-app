import express, {Application, Request, Response, NextFunction} from "express";

const app: Application = express();

//Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))



export default app