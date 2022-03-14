const express = require("express")
const router = express.Router()
const loginService = require("../services/loginService")
const validatorHandler = require("../middlewares/validatorHandler");
const userDTO = require("../dtos/userDTO")


router.post("/register", (req, res, next) => {
    loginService.register(req, res, next)
})

router.post("/", validatorHandler(userDTO, "body"), (req, res, next) => {
    loginService.login(req, res, next)
})

module.exports = router
