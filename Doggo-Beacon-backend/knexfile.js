// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Dev252021",
      database: "DoggoBeacon",
      charset: "utf8",
    },
    seeds: {
      directory: "./db/seeds",
    },
    migrations: {
      directory: "./db/migrations",
    },
  },
};
