import EmployeesService from '../services/employeesService.js';

class EmployeesController {

    /**
     * Metodo para consulta de empleados
     * @param {request} _ 
     * @param {*response} res 
     * @returns array
     */
    static getEmployees =  async (_, res) => {
        try{
            const employees =  await EmployeesService.getEmployees();
            return res.status(200).json({
                success: true,
                data: employees,
                message: 'Información obtenida correctamente',
            });
        }catch(error){
            return res.status(400).json({
                success: false,
                data: [],
                message: 'Problemas para obtener la Información',
            });  
        }

    };
    

    /**
     * Metodo para almacenar empleados
     * @param {*} req 
     * @param {*} res 
     * @returns array
     */
    static createEmployee = async (req, res) => {

        try{
            const result = await EmployeesService.createEmployee(req);
            return res.status(200).json({
                success: true,
                data: result,
                message: 'Información almacenada correctamente',
            });
    
        }catch(error){
            return res.status(400).json({
                success: false,
                data: [],
                message: error.details[0].message?error.details[0].message:'Problemas para almacenar la Información',
            });            
        }

    };
     
}

export default EmployeesController;