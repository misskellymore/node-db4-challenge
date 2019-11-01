const express = require('express');
const route = require('./routes/routes.js');

const server = express();

server.use(express.json());
server.use('/api/food', route);

module.exports = server;