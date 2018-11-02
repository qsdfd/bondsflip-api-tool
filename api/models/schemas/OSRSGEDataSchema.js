const joi = require('joi');


module.exports = joi.object().keys({
    osrs_api: {
        osrsGePrice: joi.string().allow('').optional()
    }
});