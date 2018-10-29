const joi = require('joi');

module.exports = class {

    constructor(dataObj){
        if(joi.validate(dataObj, this.schema()).error === null){
            return dataObj;
        }
    }
}


