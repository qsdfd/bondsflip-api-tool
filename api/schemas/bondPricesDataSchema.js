let joi = require('joi');


const schema = joi.object().keys({
    //OSRS GE data
    osrsGePrice: joi.string().allow('').optional(),

    // OSBuddy data
    avgPrice: joi.number().optional(),
    avgBuyPrice: joi.number().optional(),
    avgSellPrice: joi.number().optional(),

    // calculated data
    buyPrice: joi.number().optional(),
    selPrice: joi.number().optional(),
});

module.exports.validate = function (priceDataViewObj) {
    return Joi.validate(priceDataViewObj, schema).error === null;
}
