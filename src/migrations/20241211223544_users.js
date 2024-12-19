export function up(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
    });
  };
  
  export function down(knex) {
    return knex.schema.dropTableIfExists('users');
  };