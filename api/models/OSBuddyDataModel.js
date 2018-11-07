const SchemaModel = require('./SchemaModel.js');
const OSBuddyDataSchema = require('./schemas/OSBuddyDataSchema.js');


module.exports = class extends SchemaModel{
    schema(){
        return OSBuddyDataSchema;
    }

    constructor(avgPrice, avgBuyPrice, buyQuantity, avgSellPrice, sellQuantity) {
        super({
            osbuddy : {
                avgPrice : avgPrice,
                avgBuyPrice : avgBuyPrice,
                buyQuantity: buyQuantity,
                avgSellPrice : avgSellPrice,
                sellQuantity: sellQuantity,
            }
        });
    }

}