import express, { Router } from "express";
import * as HomeworkController from "../controllers/HomeworkController";
import * as UsersController from "../controllers/UsersController";
import * as TestController from "../controllers/TestController";

const router:Router = express.Router();

const path = {
    homeworkmaster:"/homeworkmaster",
    homeworkstudent: "/homeworkstudent",
    users:"/users",
    testmaster:"/testmaster",
    teststudent:"/teststudent",
}

//HomeworkMASTER

router.get(`${path.homeworkmaster}/:id`, HomeworkController.getHomeworkMasterByID);
router.post(path.homeworkmaster, HomeworkController.createHomeworkMaster);
router.put(`${path.homeworkmaster}/:id`, HomeworkController.updateHomeworkMasterByID);

//HomeworkSTUDENT

router.get(`${path.homeworkstudent}/:id`, HomeworkController.getHomeworkStudentByStudentID);
router.post(path.homeworkstudent, HomeworkController.createHomeworkStudent);
router.put(`${path.homeworkstudent}/:id`, HomeworkController.updateHomeworkStudentByStudentID);

//USERS

// router.get(path.users, HomeworkController.getHomeworkStudentByStudentID);
// router.get(`${path.users}/:id`, HomeworkController.getHomeworkStudentByStudentID);
router.post(path.users, UsersController.createStudent);
// router.put(`${path.users}/:id`, HomeworkController.updateHomeworkStudentByStudentID);

//TestMASTER

router.post(path.testmaster, TestController.createTestMaster);

//TestSTUDENT

router.post(path.teststudent, TestController.createTestStudent);


export default router;



