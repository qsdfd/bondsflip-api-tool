const SchemaModel = require('./SchemaModel.js');
const CalculatorParametersSchema = require('./schemas/CalculatorParametersSchema.js');


module.exports = class extends SchemaModel{
    schema(){
        return CalculatorParametersSchema;
    }
}