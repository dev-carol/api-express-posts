module.exports = {
  development: {
    client: 'mysql',
    connection: {
      timezone: 'utc',
      host: '127.0.0.1',
      port: '3306',
      database: 'nodejs',
      user:     'root',
      password: '123',
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations',
    },
  },

};
