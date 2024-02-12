const knex = require("knex");
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
})

module.exports = db