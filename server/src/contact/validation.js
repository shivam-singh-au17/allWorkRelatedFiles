const Joi = require("joi");

module.exports = {
    post: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        mobile: Joi.string().required(),
        subject: Joi.string().required(),
        message: Joi.string().required()
    }),
    patchOne: Joi.object({
        name: Joi.string().required(),
        label: Joi.string().required(),
        mobile: Joi.string().required(),
        subject: Joi.string().required(),
        message: Joi.string().required()
    }),
};
