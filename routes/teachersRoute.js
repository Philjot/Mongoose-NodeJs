import {Router} from "express";
import { getTeachers, createTeacher, getSingleTeacher, editTeacher, removeTeacher } from "../controllers/teacherController.js";

const teacherRouter = Router()



teacherRouter.get('/', getTeachers)
teacherRouter.post('/', createTeacher)
teacherRouter.get('/:_id', getSingleTeacher)
teacherRouter.patch('/:_id', editTeacher)
teacherRouter.delete('/:_id', removeTeacher)

export default teacherRouter