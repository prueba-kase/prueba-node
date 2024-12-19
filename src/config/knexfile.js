import  value  from "./env.js";

export default {
  development: {
    client: "pg",
    connection: {
      host: value.DB_HOST,
      user: value.DB_USER,
      password: value.DB_PASSWORD,
      database: value.DB_DATABASE,
      port: value.DB_PORT,
    },
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
  production: {
    client: "pg",
    connection: {
      host: value.DB_HOST,
      user: value.DB_USER,
      password: value.DB_PASSWORD,
      database: value.DB_DATABASE,
      port: value.DB_PORT,
    },
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};