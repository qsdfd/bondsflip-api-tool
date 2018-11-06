const joi = require('joi');


module.exports = joi.object().keys({
    osrsGraph: {
        daily: joi.number().optional(),
        average: joi.number().optional(),
    }
});