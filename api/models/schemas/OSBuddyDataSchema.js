const joi = require('joi');


module.exports = joi.object().keys({
    osbuddy : {
        avgPrice: joi.number().optional(),
        avgBuyPrice: joi.number().optional(),
        buyQuantity: joi.number().optional(),
        avgSellPrice: joi.number().optional(),
        sellQuantity: joi.number().optional(),
    }
});