const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/restaurants-api";

mongoose.connect(url);

const db = mongoose.connection;
db.on("connect", () => {
  console.log("DB connected");
});
db.on("error", console.error.bind(console, "DB failed to connect"));

module.exports = db;
