const SchemaModel = require('./SchemaModel');
const CalculatedPricesSchema = require('./schemas/CalculatedPricesSchema');


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