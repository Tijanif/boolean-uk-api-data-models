const express = require('express');
const logger = require('morgan');
const app = express();

const desginerRouter = require('./src/resources/designer/routes');

// Middleware
app.use(logger('dev'));
app.use(express.json());

// Routes
app.use('/designers', desginerRouter);

app.all('*', (req, res) => {
  res.json({ msg: 'Wrong place go back!' });
});

module.exports = app;
