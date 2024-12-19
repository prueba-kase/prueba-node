import db from '../config/database.js'; 

class EmployeesDAO {

  /**
   * Metodo para obtener listado de empleads
   * @returns 
   */
  static async getEmployees() {
    try {
      const employess = await db('employee').select();
      return employess;
    } catch (error) {
      console.error('Error al consultar registros', error);
      throw error;
    }
  }

  /**
   * Metodo para almacenar empleados
   * @param {object} employee 
   * @returns 
   */
  static async createEmployee(employee) {
    try {
      const employeeID = await db('employee').insert({ ...employee }).returning('id_employee');
      return employeeID;
    } catch (error) {
      console.error('Dao: ', error);
      throw error;
    }
  }  
}

export default EmployeesDAO;