import express, {Application, Request, Response, NextFunction} from "express";
import path from "path";

const app: Application = express();

//Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Static files
app.use(express.static(path.join(__dirname, "../public/")));


export default app