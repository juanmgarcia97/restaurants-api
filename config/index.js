const { Pool } = require('pg')
const dotenv = require("dotenv")

dotenv.config()

const pool = new Pool({
    user: process.env.DATABASE_PG_USER,
    host: process.env.DATABASE_PG_HOST,
    database: process.env.DATABASE_PG_DB,
    password: process.env.DATABASE_PG_PWD,
    port: process.env.DATABASE_PG_PORT,
})

pool.on("connect", () => {
    console.log("connected to the database");
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}