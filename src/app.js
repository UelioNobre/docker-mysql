const express = require('express');
require('express-async-errors');

const router = require('./routes');

// Middleware de erro
const errorMiddleware = require('./middlewares/error.middleware');

const app = express()

app.use(express.json())
app.use(router)

// Implementa o middleware de erro
app.use(errorMiddleware.errorHandler)

module.exports = app