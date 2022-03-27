const Joi = require("joi");

module.exports = {
    post: Joi.object({
        position: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string().required(),
        mobile: Joi.string().required(),
        qualification: Joi.string().required(),
        location: Joi.string().required(),
        experience: Joi.string().required(),
        userCv: Joi.string().required()
    }),
};


