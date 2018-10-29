const joi = require('joi');


module.exports = joi.object().keys({
    osrsGePrice: joi.string().allow('').optional()
});