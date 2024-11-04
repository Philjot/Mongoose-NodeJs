import {Router} from "express";
import { createStudent, editStudent, getSingleStudent, getStudents, removeStudent } from "../controllers/studentControllers.js";
import authentication from "../middleware/authentication.js";

const studentRouter = Router()

studentRouter.get('/', authentication, getStudents)
studentRouter.post('/', authentication, createStudent)
studentRouter.get('/:_id', authentication, getSingleStudent)
studentRouter.patch('/:_id', authentication, editStudent)
studentRouter.delete('/:_id', authentication, removeStudent)

export default studentRouter