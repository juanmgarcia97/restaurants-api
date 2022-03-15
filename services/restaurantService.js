const axios = require("axios");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const db = require("../config");

dotenv.config();

const key = process.env.GOOGLE_API_KEY;

exports.search = async (req, res, next) => {
  //Verificacion de las credenciales
  jwt
    .verify(req.token, "secretkey", async (error) => {
      if (error) throw boom.forbidden("Credentials are not correct");
      //Verificacion del tipo de busqueda (por ciudad, lugar, etc. o por coordenadas)
      const { place } = req.params;
      let url;
      if (place.includes(",")) {
        url = `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${place}&type=restaurant&key=${key}`;
      } else {
        url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&type=restaurant&key=${key}`;
      }
      const { data } = await axios.get(url);
      //Extraccion de datos importantes de los restaurantes
      const restaurants = data.results.map((place) => {
        const { formatted_address: address, geometry, name, rating } = place;
        const { location } = geometry;
        return { name, address, location, rating };
      });
      const { user } = jwt.decode(req.token);
      const { rows } = await db.query(
        "SELECT user_id FROM users WHERE username = $1",
        [user.username]
      );
      const userId = rows[0].user_id;
      // const rests = JSON.stringify(restaurants)
      await db.query(
        `INSERT INTO restaurants_user (user_id, restaurants) VALUES ($1, $2)`,
        [userId, `${JSON.stringify(restaurants)}`]
      );
      res.send(restaurants);
    })
    .catch((e) => {
      next(e);
    });
};

exports.transactions = async (req, res, next) => {
  const { user } = jwt.decode(req.token);
  const { rows } = await db.query(
    "SELECT user_id FROM users WHERE username = $1",
    [user.username]
  );
  const userId = rows[0].user_id;
  await db
    .query("SELECT * FROM restaurants_user WHERE user_id = $1", [userId])
    .then((result, err) => {
      if (result.rows.length === 0)
        throw boom.notFound("There are not transactions for you");
      res.send(result.rows)
    })
    .catch((e) => {
      next(e);
    });
};
