const express = require("express")
const router = express.Router()
const loginService = require("../services/loginService")
const validatorHandler = require("../middlewares/validatorHandler");
const userDTO = require("../dtos/userDTO")


router.post("/register", async (req, res, next) => {
    await loginService.register(req, res, next)
})

router.post("/login", validatorHandler(userDTO, "body"), async (req, res, next) => {
    await loginService.login(req, res, next)
})

router.put("/logout", (req, res, next) => {
    loginService.logout(req, res, next)
})

module.exports = router
