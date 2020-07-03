import express, { Response, Request, NextFunction, response } from "express";
const router = express.Router();

router.get('/', (req:Request, res:Response, next:NextFunction)=>{
    res.send('Hello there :) You get master homework object');
});
router.post('/',(req:Request,res:Response)=>{
})


export default router;
