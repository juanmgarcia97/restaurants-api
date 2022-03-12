const express = require("express");
const loginRouter = require("./login")
const boom = require("@hapi/boom")

function routerApi(app) {
    const router = express.Router();
    app.use("/api", router);
    router.use("/login", loginRouter);
    // router.use("/sellers", sellerRouter);
    // router.use("/clients", clientRouter);
    // router.use("/sales", saleRouter);
    router.all("*", () => {
        throw boom.badRequest("Page was not found")
    })
}

module.exports = routerApi;