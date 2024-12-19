export  function seed(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          { email: 'taling1993@gmail.com', password: '123456' }
        ]);
      });
  };
  

