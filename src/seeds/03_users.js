export  function seed(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          { email: 'prueba@prueba.com', password: '123456' }
        ]);
      });
  };
  

