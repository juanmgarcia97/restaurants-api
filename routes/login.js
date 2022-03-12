const express = require("express")
const loginService = require("../services/loginService")
const verifyToken = require("../services/verifyTokenService")
const router = express.Router()

router.post("/register", (req, res, next) => {
    loginService.register(req, res, next)
})

router.post("/", verifyToken, (req, res, next) => {
    loginService.login(req, res, next)
})

module.exports = router
