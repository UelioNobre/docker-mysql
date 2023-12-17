const development = {
  username: "root",
  password: "123456",
  database: "sequelize_playground",
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    bigNumberStrings: true
  },
  logging: process.env.NODE_ENV !== 'development',
};

const test = {
  ...development,
  logging: process.env.NODE_ENV !== 'test',
}

const production = {
  ...development,
  logging: process.env.NODE_ENV !== 'production',
}

module.exports = {
  development,
  test,
  production
}