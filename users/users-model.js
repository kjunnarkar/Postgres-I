const db = require('../database/db-config');

module.exports = {
    getAll
}

function getAll () {
    return db('users')
}

