import UsersDAO     from '../dao/usersDao.js';
import { AuthDto }  from '../dto/usersDto.js';
import value        from '../config/env.js';
import jwt          from 'jsonwebtoken';


class AuthService {
    static async checkIdentity(request) {
        const secretKey = value.JWT_SECRET;
        try{
            const { error, value } = AuthDto.validate(request['body']['data']);
            if (error) throw error;
            const {email, password} = value;

            const data = await UsersDAO.checkIdentity(email, password);
            if(!data)  throw new Error("No se ha podido iniciar sesión");
            const token = jwt.sign(data, secretKey, { expiresIn: '1h' });

            return {token,data};
        }catch(error){
            console.log(error);
        }
    }
}

export default AuthService;