const boom = require("@hapi/boom")

function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        req.token = bearerHeader.split(" ")[1];
        next();
    } else {
        throw boom.forbidden()
    }
}

module.exports = verifyToken