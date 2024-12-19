import EmployeesDAO          from '../dao/employeesDao.js';
import { EmployeeCreateDto } from '../dto/employeeDto.js';

class EmployeesService {

    static getEmployees =  async (request) => {
        try{
            const employees = await EmployeesDAO.getEmployees();
            return employees;
        }catch(error){
            return [];  
        }
    };

    static createEmployee = async (request) => {
        try{
           const { value:employee, error} = EmployeeCreateDto.validate(request['body']['data']);
           if (error) throw error;
           await EmployeesDAO.createEmployee(employee);
        }catch(error){
            console.log('Service',error)
            throw error;
        }
    }

}

export default EmployeesService;