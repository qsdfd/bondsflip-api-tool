const SchemaModel = require('./SchemaModel');
const CalculatorParametersSchema = require('./schemas/CalculatorParametersSchema');


module.exports = class extends SchemaModel{
    schema(){
        return CalculatorParametersSchema;
    }

    constructor(profitMargin, optimisticRounding) {
        super({
            parameters : {
                profitMargin: profitMargin,
                optimisticRounding: optimisticRounding
            }
        });
    }

}