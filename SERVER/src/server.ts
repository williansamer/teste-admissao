import "dotenv/config";
import "express-async-errors"
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json(err.message)
    }

    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error"
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})