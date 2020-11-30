const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "2782024000",
    host: "localhost",
    port: 5432,
    database: "matcher"
})

module.exports = pool