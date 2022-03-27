const Joi = require("joi");

module.exports = {
    create: Joi.object({
        fileUplode: Joi.string(),
    }),
    update: Joi.object({
        fileUplode: Joi.string(),
    }),
};

