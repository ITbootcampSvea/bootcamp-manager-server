import express, { Router } from "express";
import * as HomeworkController from "../controllers/HomeworkController";
import * as UsersController from "../controllers/UsersController";
import * as TestController from "../controllers/TestController";
import * as DashboardController from '../controllers/DashboardController';

const router:Router = express.Router();

const path = {
    users:"/users",
    dashboard:"/dashboard",
    homeworkmaster:"/homeworkmaster",
    homeworkstudent: "/homeworkstudent",
    testmaster:"/testmaster",
    teststudent:"/teststudent",
}

//USERS

//router.get(path.users, HomeworkController.getHomeworkStudentByStudentID);
// router.get(`${path.users}/:id`, HomeworkController.getHomeworkStudentByStudentID);
router.post(path.users, UsersController.createStudent);
// router.put(`${path.users}/:id`, HomeworkController.updateHomeworkStudentByStudentID);

//Dashboard

router.get(path.dashboard, DashboardController.getDashboardItems);
router.get(`${path.dashboard}/:id`, DashboardController.getDashboardItemByID);
router.post(path.dashboard, DashboardController.createDashboardItem);
router.patch(`${path.dashboard}/:id`, DashboardController.updateDashboardItemByID);
router.delete(`${path.dashboard}/:id`, DashboardController.deleteDashboartItemByID);

//HomeworkMASTER

router.get(path.homeworkmaster, HomeworkController.getHomeworkMasters);
router.get(`${path.homeworkmaster}/:id`, HomeworkController.getHomeworkMasterByID);
router.post(path.homeworkmaster, HomeworkController.createHomeworkMaster);
router.patch(`${path.homeworkmaster}/:id`, HomeworkController.updateHomeworkMasterByID);
router.delete(`${path.homeworkmaster}/:id`, HomeworkController.deleteHomeworkMasterByID);

//HomeworkSTUDENT

router.get(path.homeworkstudent, HomeworkController.getHomeworkStudents);
router.get(`${path.homeworkstudent}/:id`, HomeworkController.getHomeworkStudentByID);
router.post(path.homeworkstudent, HomeworkController.createHomeworkStudent);
router.patch(`${path.homeworkstudent}/:id`, HomeworkController.updateHomeworkStudentByID);



//TestMASTER

router.post(path.testmaster, TestController.createTestMaster);

//TestSTUDENT

router.post(path.teststudent, TestController.createTestStudent);


export default router;



