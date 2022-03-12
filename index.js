const express = require("express");
const routerApi = require("./routes");
const { json } = require("express");

const app = express();

let port = process.env.PORT || 3000;

const db = require("./config/mongoose");

app.use(json());
routerApi(app);

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
