const Joi = require("joi");

module.exports = {
    post: Joi.object({
        workingType: Joi.string().required(),
        email: Joi.string().required(),
        firstName: Joi.string().required(),
        middleName: Joi.string().required(),
        lastName: Joi.string().required(),
        mobile: Joi.string().required(),
        expertise: Joi.string().required()
    }),
};


