let Joi = require('joi');
let joiModel = require('joi-model');

module.exports = joiModel({
    osrsGePrice: Joi.string(),
    avgPrice: Joi.number(),
    avgBuyPrice: Joi.number(),
    avgSellPrice: Joi.number(),
    buyPrice: Joi.number(),
    selPrice: Joi.number(),
});