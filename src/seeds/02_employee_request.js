export function seed(knex) {
    return knex('employee_request').del()
      .then(function () {
        return knex('employee_request').insert([
          { code: '0123456', novelty: 'Vacaciones',        description:'Solicitud de vacaciones 12-2024',        id_employee:1 },
          { code: '0123457', novelty: 'Día de la familia', description:'Solicitud Día de la familia',            id_employee:1 },
          { code: '0123458', novelty: 'Incapacidad',       description:'Se registra incapacidad medica 11-2024', id_employee:1 },
          { code: '0123456', novelty: 'Vacaciones',        description:'Solicitud de vacaciones 01-2025',        id_employee:2 },
        ]);
      });
  };
    


