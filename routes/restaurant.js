const express = require("express")
const router = express.Router()
const restaurantService = require("../services/restaurantService")
// const verifyToken = require("../services/verifyTokenService")
// const validatorHandler = require("../middlewares/validatorHandler");

router.get("/:place", (req, res, next) => {
    restaurantService.search(req, res, next)
})

module.exports = router