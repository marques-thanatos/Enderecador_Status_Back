const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
const rotas = require('../app/rotas/rotas.js');
rotas(app);

module.exports = app;
