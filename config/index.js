const { Pool } = require('pg')

const connectionString = 'postgresql://tyba:root@172.18.0.3:5432/restaurants-api'

const pool = new Pool({
    connectionString
})

pool.on("connect", () => {
    console.log("connected to the Database");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
