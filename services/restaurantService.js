const axios = require("axios");
const dotenv = require("dotenv")

dotenv.config()

const key = process.env.GOOGLE_API_KEY;

exports.search = async (req, res, next) => {
  const place = req.params.place;
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&type=restaurant&key=${key}`
  );
  res.send(data);
};
