import db from '../config/database.js'; 

class UsersDAO {
  static async checkIdentity(email, password) {
    try {
      const user = await db('users')
        .where({ email, password })
        .select('email')
        .first(); 
      return user;

    } catch (error) {
        console.log('falla el modelo',error);
        throw error; 
    }
  }
}

export default UsersDAO;