import { Router } from "express";
import { signUp, logIn } from "../controllers/userController.js";


const userRoute = Router();

userRoute.post('/register', signUp);
userRoute.post('/login', logIn);


export default userRoute;