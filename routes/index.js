const express = require("express");
const loginRouter = require("./login")
const restaurantRouter = require("./restaurant")
const boom = require("@hapi/boom")

function routerApi(app) {
    const router = express.Router();
    app.use("/api", router);
    router.use("/", loginRouter);
    router.use("/restaurants", restaurantRouter);
    router.all("*", () => {
        throw boom.badRequest("Page was not found")
    })
}

module.exports = routerApi;