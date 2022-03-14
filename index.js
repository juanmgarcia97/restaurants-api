const express = require("express");
const routerApi = require("./routes");
const { json } = require("express");
const {
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler");

const app = express();

let port = process.env.PORT || 3000;

app.use(json());
routerApi(app);
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
