const joi = require('joi');


module.exports = joi.object().keys({
    calculated : {
        buyPrice: joi.number().optional(),
        sellPrice: joi.number().optional()
    }
});