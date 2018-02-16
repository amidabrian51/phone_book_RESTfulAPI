const express = require('express');
const app = express();

const numberRoutes = require('./api/routes/directories');

app.use('/directories', numberRoutes);

module.exports = app;
