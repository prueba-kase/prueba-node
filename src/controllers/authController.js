import { responseSuccess } from '../utils/response.js';
import asyncHandler        from '../utils/asyncHandler.js';
import AuthService         from '../services/authService.js';


class AuthController {

    /**
     * Metodo para validación de identidad y generación de token
     * @param {Request} req 
     * @param {Response} res 
     * @returns @object
     */
    static login = async (req, res) => {
        try{
            const {data,token} = await AuthService.checkIdentity(req);
            return res.status(200).json({
                success: true,
                data: {
                    data,
                    token,
                    login:true, 
                    profile:'employee'
                },
                message: 'Sesion iniciada correctamente',
            });
        }catch(error){
            return res.status(400).json({
                success: false,
                data: error,
                message:'No se ha podido iniciar sesión',
            }); 
        }
    };
     
    static logout = asyncHandler(async (req, res) => {
            return res.status(200).json(
            responseSuccess(true, value , 'Información Almacenada Correctamente')
        );
    });
    
}

export default AuthController;