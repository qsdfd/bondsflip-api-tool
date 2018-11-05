const joi = require('joi');


module.exports = joi.object().keys({
    parameters : {
        profitMargin: joi.number().min(0).default(0),
        optimisticRounding: joi.boolean.default(false)
    }
});