const schemaValidator = require('./schemas/helpers/schemaValidator');

module.exports = class {
    constructor(dataObj){
        if(schemaValidator.isValid(dataObj, this.schema())){
            return dataObj;
        }
    }
}
