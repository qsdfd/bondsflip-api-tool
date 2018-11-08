const OSBuddyAPISummaryComposer = require('../dal/dataComposers/OSBuddyAPISummaryComposer');
const OSRSGEAPIComposer = require('../dal/dataComposers/OSRSGEAPIComposer');
const OSRSGEAPIGraphComposer = require('../dal/dataComposers/OSRSGEAPIGraphComposer');
const OSBuddyPriceCalculator = require('./priceCalculators/OSBuddyPricesCalculator');


module.exports = class {
    static processData(parameterObj){
        return OSRSGEAPIComposer.composeData(
            OSRSGEAPIGraphComposer.composeData(
                OSBuddyAPISummaryComposer.composeData()))
            .then()
    }
}