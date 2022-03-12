const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4 } = require("uuid");

const userSchema = new Schema({
  userId: { type: String, min: 36, default: v4() },
  username: { type: String, min: 5, max: 15 },
  password: { type: String, min: 8 },
});

module.exports = mongoose.model("user", userSchema);
