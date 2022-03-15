const db = require("../config");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  const hashPwd = md5(password);
  let user = [];
  await db
    .query("SELECT * FROM users WHERE username = $1", [username])
    .then(async (result) => {
      user = result.rows;
      if (user.length > 0) {
        throw boom.conflict("Username already exists");
      }
      await db.query(
        "INSERT INTO users (username, password) VALUES ($1, $2)",
        [username, hashPwd],
        (err, result) => {
          if (err) {
            return next(err);
          }

          res.status(201).send({
            isSuccess: true,
            message: "User register successfully",
            body: { username, password },
          });
        }
      );
    })
    .catch((e) => {
      next(e);
    });
};

exports.login = async (req, res, next) => {
  let user = {};
  await db
    .query(
      "SELECT username, password FROM users WHERE username = $1 AND password = $2",
      [req.body.username, md5(req.body.password)]
    )
    .then((result) => {
      const data = result.rows;
      if (data.length === 0) {
        throw boom.forbidden("Credentials are not correct");
      }
      user = data[0];
      user = req.body;
      jwt.sign({ user }, "secretkey", (err, token) => {
        res.json({
          token,
        });
      });
    })
    .catch((e) => {
      next(e);
    });
};

exports.logout = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (err) next(err);
    res.send({ isSuccess: true, message: "You have been logged out" });
  });
};
