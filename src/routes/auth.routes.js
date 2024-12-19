import { Router } from "express";
import AuthController from '../controllers/authController.js';

const AuthRouter = Router();

AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/logout", AuthController.logout);


export default AuthRouter;