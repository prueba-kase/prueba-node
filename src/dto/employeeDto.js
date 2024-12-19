import Joi from 'joi';

const EmployeeCreateDto = Joi.object({
    names      : Joi.string().required(),
    entry_date : Joi.date().required(),
    salary     : Joi.number().required()
});

export  {EmployeeCreateDto};