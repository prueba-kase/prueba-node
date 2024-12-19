import EmployeeRequestDAO           from '../dao/employeeRequestDao.js';
import { EmployeeRequestCreateDto } from '../dto/employeeRequestDto.js';

class EmployeeRequestService {

    static getEmployeeRequest =  async () => {
        try{
            const employeeRequest = await EmployeeRequestDAO.getEmployeeRequest();
            return employeeRequest;
        }catch(error){
            console.log(error)
            return [];  
        }

    };

    static createEmployeeRequest = async (request) => {
        try{
           const { value, error} = EmployeeRequestCreateDto.validate(request['body']['data']);
           if (error) throw error;
           await EmployeeRequestDAO.createEmployeeRequest(value);
        }catch(error){
            console.log('Service',error)
            throw error;
        }
    }

}

export default EmployeeRequestService;