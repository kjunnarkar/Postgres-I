// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      database: process.env.DB_DEV_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },  

  testing: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      database: process.env.DB_TEST_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
