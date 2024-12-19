import knex       from 'knex';
import knexConfig from '../config/knexfile.js';
import value      from './env.js';

const db = knex(knexConfig[value.NODE_ENV || 'development']);
export default db;
