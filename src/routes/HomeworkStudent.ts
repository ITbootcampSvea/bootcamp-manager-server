import express, { Response, Request, NextFunction, response } from "express";

const router = express.Router();

router.get("/", (req:Request, res:Response, next:NextFunction)=>{
    res.send('Hello there :) You will get student homework object');
});


export default router;
