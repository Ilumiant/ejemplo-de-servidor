const Joi = require('joi');

const creatingUserSchema = Joi.object({
  name: Joi.string()
    .max(50)
    .pattern(new RegExp('^[a-zA-Z]$'))
    .required(),
  password: Joi.string()
    .min(6)
    .max(50)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),
  email: Joi.string()
    .email()
    .required(),
})

const updatingUserSchema = Joi.object({
  name: Joi.string()
    .max(50)
    .pattern(new RegExp('^[a-zA-Z]$')),
  password: Joi.string()
    .min(6)
    .max(50)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string()
    .email()
})

module.exports = { creatingUserSchema, updatingUserSchema }
