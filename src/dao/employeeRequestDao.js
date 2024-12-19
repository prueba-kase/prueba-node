import db from '../config/database.js'; 

class EmployeeRequestDAO {

  /**
   * Metodo para obtener las solicitudes de empleados 
   * @returns 
   */
  static async getEmployeeRequest() {
    try {
      const employess = await db('employee_request').select();
      return employess;
    } catch (error) {
      console.error('Error al consultar registros', error);
      throw error;
    }
  }

  /**
   * Metodo para obtener el listado de solicitudes
   * @param {array} employeeRequest 
   * @returns 
   */
  static async createEmployeeRequest(employeeRequest) {
    try {
      const employeeRequestID = await db('employee_request').insert({ ...employeeRequest }).returning('id_employee_request');
      return employeeRequestID;
    } catch (error) {
      console.error('Dao: ', error);
      throw error;
    }
  }  
}

export default EmployeeRequestDAO;