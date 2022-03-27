const Joi = require("joi");

module.exports = {
    post: Joi.object({
        email: Joi.string().required()
    }),
};


