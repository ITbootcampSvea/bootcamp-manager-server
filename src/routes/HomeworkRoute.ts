import express from "express";
import * as HomeworkController from "../controllers/HomeworkController";

const router = express.Router();

const path = "/homeworkstudent";

router.get(path+"/:id", HomeworkController.getHomeworkMasterByID);
router.post(path,HomeworkController.createHomeworkMaster);

export default router;

// router.get('/homeworkstudent', (req:Request, res:Response, next:NextFunction)=>{
//     res.send('Hello there :) You get master homework object');
// });


// router.post('/',(req:Request,res:Response)=>{
// })

