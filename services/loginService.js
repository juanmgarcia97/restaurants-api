const { getClient } = require("../config/getClient");
const md5 = require("md5");

exports.register = async (req, res, next) => {
  let { username, password } = req.body;
  password = md5(password);
  const client = await getClient()
  client
    .query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      password,
    ])
    .then((result) => {
      result = result.rows[0];
      res.status(200).send({
        isSuccess: true,
        message: "User register successfully",
        body: { username: result.username, password: result.password },
      });
    })
      await client.end()
    .catch((e) => {
      res.status(500).send({
        e,
      });
    });
};
