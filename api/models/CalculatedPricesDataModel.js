const SchemaModel = require('./SchemaModel.js');
const CalculatedPricesSchema = require('./schemas/CalculatedPricesSchema.js');


module.exports = class extends SchemaModel{
    schema(){
        return CalculatedPricesSchema;
    }

    constructor(buyPrice, sellPrice) {
        super({
            calculated : {
                buyPrice: buyPrice,
                sellPrice: sellPrice
            }
        });
    }
}