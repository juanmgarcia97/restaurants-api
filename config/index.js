const { Pool } = require('pg')

// const connectionString = 'postgresql://postgres:juanmar1709@localhost:5433/restaurants-api'

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurants-api',
    password: 'juanmar1709',
    port: 5433,
})

pool.on("connect", () => {
    console.log("connected to the Database");
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}