const SchemaModel = require('./SchemaModel');
const OSBuddyDataSchema = require('./schemas/OSBuddyDataSchema');


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