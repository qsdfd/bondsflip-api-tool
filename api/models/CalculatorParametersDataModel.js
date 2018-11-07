const SchemaModel = require('./SchemaModel.js');
const CalculatorParametersSchema = require('./schemas/CalculatorParametersSchema.js');


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