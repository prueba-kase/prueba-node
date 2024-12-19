import { Router } from "express";
import EmployeeRequestController from '../controllers/employeeRequestController.js';
import authenticateJWT from "../middlewares/jwtMiddleware.js";

const EmployeeRequestRouter = Router();
EmployeeRequestRouter.use(authenticateJWT);
EmployeeRequestRouter.post("/employee-request-list", EmployeeRequestController.getEmployeeRequest);
EmployeeRequestRouter.post("/employee-request-save", EmployeeRequestController.createEmployeeRequest);


export default EmployeeRequestRouter;