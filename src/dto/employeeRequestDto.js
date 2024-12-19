import Joi from 'joi';

const EmployeeRequestCreateDto = Joi.object({
    code        : Joi.string().required(),
    description : Joi.string().required(),
    novelty     : Joi.string().required(),
    id_employee : Joi.number().required()
});

export  {EmployeeRequestCreateDto};