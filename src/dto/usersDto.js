import Joi from 'joi';

const AuthDto = Joi.object({
    email:    Joi.string().required(),
    password: Joi.string().required()
});

export  {AuthDto};