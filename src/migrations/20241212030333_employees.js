/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
        .createTable('employee', function(table) {
        table.increments('id_employee').primary();
        table.date('entry_date');
        table.string('names', 100);
        table.decimal('salary', 10, 2);
        })
        .createTable('employee_request', function(table) {
        table.increments('id_employee_request').primary();;;
        table.string('code', 50);
        table.string('description', 50);
        table.string('novelty', 50);
        table.integer('id_employee');
    });
};

export  function down (knex) {
return knex.schema
    .dropTable('employee_request')
    .dropTable('employee');
};