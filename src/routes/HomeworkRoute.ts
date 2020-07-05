import express, { Router } from "express";
import * as HomeworkController from "../controllers/HomeworkController";

const router:Router = express.Router();

const path = {
    homeworkmaster:"/homeworkmaster",
    homeworkstudent: "/homeworkstudent",
}

//HomeworkMASTER

router.get(`${path.homeworkmaster}/:id`, HomeworkController.getHomeworkMasterByID);
router.post(path.homeworkmaster, HomeworkController.createHomeworkMaster);
router.put(`${path.homeworkmaster}/:id`, HomeworkController.updateHomeworkMasterByID);

//HomeworkSTUDENT

router.get(`${path.homeworkstudent}/:id`, HomeworkController.getHomeworkStudentByStudentID);
router.post(path.homeworkstudent, HomeworkController.createHomeworkStudent);
router.put(`${path.homeworkstudent}/:id`, HomeworkController.updateHomeworkStudentByStudentID);


export default router;



