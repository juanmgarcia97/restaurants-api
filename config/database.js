const { Client } = require('pg');

// module.exports.getClient = async () => {
//     const client = new Client({
//         user: "tyba",
//         host: "172.18.0.3",
//         database: "restaurants-api",
//         password: "root",
//         port: "5432",
//         ssl: true,
//     });
//     await client.connect();
//     return client;
// };

(async () => {
    const client = new Client({
        user: "tyba",
        host: "172.18.0.3",
        database: "restaurants-api",
        password: "root",
        port: "5432",
    });
    await client.connect();
    const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
    console.log(res.rows[0].connected);
    await client.end();
})();


// const { Pool } = require('pg')
//
// const pool = new Pool({
//     user: "tyba",
//     host: "172.18.0.3",
//     database: "restaurants-api",
//     password: "root",
//     port: "5432",
//     idleTimeoutMillis: 30000,
// })
//
// await pool.connect()
//
// pool.on("connect", () => {
//     console.log("connected to the Database");
// });
//
// module.exports = pool
// require("make-runnable");
