import { Router } from "express";
import EmployeesController from '../controllers/employeesController.js';
import authenticateJWT from "../middlewares/jwtMiddleware.js";

const EmployeesRouter = Router();
EmployeesRouter.use(authenticateJWT);
EmployeesRouter.post("/employees-list", EmployeesController.getEmployees);
EmployeesRouter.post("/employees-save", EmployeesController.createEmployee);


export default EmployeesRouter;