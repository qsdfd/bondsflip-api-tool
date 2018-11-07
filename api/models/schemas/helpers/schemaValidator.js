const joi = require('joi');


module.exports.isValid = (obj, schema) => joi.validate(obj, schema).error === null;