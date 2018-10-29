const joi = require('joi');


module.exports = joi.object().keys({
    avgPrice: joi.number().optional(),
    avgBuyPrice: joi.number().optional(),
    avgSellPrice: joi.number().optional()
});