import express from "express";
import * as HomeworkController from "../controllers/HomeworkController";

const router = express.Router();

const path = {
    homeworkmaster:"/homeworkmaster",
    homeworkstudent: "/homeworkmaster",
}

//HomeworkMASTER

router.get(`${path.homeworkmaster}/:id`, HomeworkController.getHomeworkMasterByID);
router.post(path.homeworkmaster, HomeworkController.createHomeworkMaster);
router.put(`${path.homeworkmaster}/:id`, HomeworkController.updateHomeworkMasterByID);

//HomeworkMASTER

router.get(`${path.homeworkstudent}/:id`, HomeworkController.getHomeworkStudentByStudentID);
router.post(path.homeworkstudent, HomeworkController.createHomeworkStudent);
router.put(`${path.homeworkstudent}/:id`, HomeworkController.updateHomeworkStudentByStudentID);


export default router;



