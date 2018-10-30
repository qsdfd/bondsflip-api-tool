const joi = require('joi');


module.exports.isValid = function(obj, schema){
    return joi.validate(obj, schema).error === null;
}