const development = {
  username: "root",
  password: "123456",
  database: "sequelize_playground",
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    bigNumberStrings: true
  }
};

const test = {
  ...development
}

const production = {
  ...development
}

module.exports = {
  development,
  test,
  production
}