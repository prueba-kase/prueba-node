import { expressjwt as jwtMiddleware } from 'express-jwt';
import value from '../config/env.js';

const secretKey = value.JWT_SECRET 

const authenticateJWT = jwtMiddleware({
    secret: secretKey,
    algorithms: ['HS256'],
});

export default authenticateJWT;