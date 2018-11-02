const joi = require('joi');


module.exports = joi.object().keys({
    osrs_graph: {
        daily: joi.number().optional(),
        average: joi.number().optional(),
    }
});