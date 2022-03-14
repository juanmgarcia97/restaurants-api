const Joi = require("joi");

const username = Joi.string().min(5).max(15);
const password = Joi.string().min(8).max(15).alphanum();

const createUserDTO = Joi.object({
  username: username.required(),
  password: password.required(),
});

module.exports = createUserDTO;
