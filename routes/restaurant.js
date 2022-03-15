const express = require("express")
const router = express.Router()
const restaurantService = require("../services/restaurantService")
const verifyToken = require("../services/verifyTokenService")
// const validatorHandler = require("../middlewares/validatorHandler");

router.get("/:place", verifyToken, async (req, res, next) => {
    await restaurantService.search(req, res, next)
})

router.get("/", verifyToken, async (req, res, next) => {
    await restaurantService.transactions(req, res, next)
})

module.exports = router