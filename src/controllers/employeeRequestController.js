import EmployeeRequestService from '../services/employeeRequestService.js';

class EmployeeRequestController {

    /**
     * Metodo para optener el listado solicitudes de empleados
     * @param {Request} _ 
     * @param {Response} res 
     * @returns 
     */
    static getEmployeeRequest =  async (_, res) => {
        try{
            const employeeRequest = await EmployeeRequestService.getEmployeeRequest();
            return res.status(200).json({
                success: true,
                data: employeeRequest,
                message: 'Información obtenida correctamente',
            });
        }catch(error){
            return res.status(400).json({
                success: false,
                data: error,
                message: 'Problemas para obtener la Información',
            }); 
        }
    };
     
    /**
     * Metodo para almacenar las solicitudes de los empleados
     * @param {Request} req 
     * @param {Response} res 
     * @returns array
     */
    static createEmployeeRequest = async (req, res) => {
        try{
            const employeeRequest = await EmployeeRequestService.createEmployeeRequest(req);
            return res.status(200).json({
                success: true,
                data: employeeRequest,
                message: 'Información almacenada correctamente',
            });
        }catch(error){
            return res.status(400).json({
                success: false,
                data: error,
                message: error.details[0].message?error.details[0].message:'Problemas para obtener la Información',
            }); 
        }
    };
     
}

export default EmployeeRequestController;