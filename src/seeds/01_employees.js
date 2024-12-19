export function seed(knex) {
    return knex('employee').del()
      .then(function () {
        return knex('employee').insert([
          { names: 'Jefferson starling', entry_date: '2021-09-08', salary:'7000000' },
          { names: 'Jessica diaz',       entry_date: '2021-09-08', salary:'5000000' },
          { names: 'Cristian Herrera',   entry_date: '2021-09-08', salary:'5000000' },
          { names: 'Joel Rodriguez',     entry_date: '2021-12-08', salary:'6000000' },
          { names: 'Juan Vargas',        entry_date: '2021-12-08', salary:'6000000' },
          { names: 'Andres Gutierrez',   entry_date: '2021-12-08', salary:'6000000' },
        ]);
      });
  };
