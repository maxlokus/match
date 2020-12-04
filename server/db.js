const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "2782024000",
    host: "35.228.58.219",
    port: 5432,
    database: "postgres"
})

module.exports = pool