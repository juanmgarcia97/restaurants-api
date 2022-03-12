const { Client } = require('pg');

module.exports.getClient = async () => {
    const client = new Client({
        user: "tyba",
        host: "172.18.0.3",
        database: "restaurants-api",
        password: "root",
        port: "5432"
    });
    await client.connect();
    return client;
};