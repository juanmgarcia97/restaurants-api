// const { getClient } = require("../config/getClient");
const md5 = require("md5");
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  const hashPwd = md5(password);
  // const client = await getClient()
  // client
  //   .query("INSERT INTO users (username, password) VALUES ($1, $2)", [
  //     username,
  //     password,
  //   ])
  //   .then((result) => {
  //     result = result.rows[0];
  //     res.status(200).send({
  //       isSuccess: true,
  //       message: "User register successfully",
  //       body: { username: result.username, password: result.password },
  //     });
  //   })
  //     await client.end()
  //   .catch((e) => {
  //     res.status(500).send({
  //       e,
  //     });
  //   });
  let message = "";
  let status = 0;
  let success = false;
  user.findOne({ username: username }, (err, doc) => {
    if (err) {
      message = "Internal error";
      status = 500;
      success = false;
    }
    if (doc) {
      message = "Username already exists";
      status = 409;
      success = false;
    } else {
      doc.password = hashPwd;
      doc.save((error) => {
        if (error) {
          message = "Something happened, try again later";
          status = 500;
          success = false;
        }
        status = 201;
        message = "User created successfully";
        success = true;
      });
    }
    res.status(status).send({
      message,
      success,
    });
  });
};

exports.login = (req, res, next) => {
  const user = req.body;
  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
};
