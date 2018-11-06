const joi = require('joi');


module.exports = joi.object().keys({
        endpoint: joi.string().required(),
        controller: joi.required()
});