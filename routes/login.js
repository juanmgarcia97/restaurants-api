const express = require("express")
const loginService = require("../services/loginService")
const router = express.Router()

router.post("/register", (req, res, next) => {
    loginService.register(req, res, next)
})

module.exports = router
