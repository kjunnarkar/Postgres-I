const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const usersRouter = require('../users/users-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send({ message: 'The Postgres Server is running' });
});

module.exports = server;

