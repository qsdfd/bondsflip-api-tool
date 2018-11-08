const DataComposerDecorator = require('./DataComposerDecorator');
const OSBuddyAPISummaryFilter = require('../responseFilters/OSBuddyAPISummaryFilter');
const OSBuddyDataModel = require('../../../models/OSBuddyDataModel');


module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSBuddyAPISummaryFilter,
            dataObj => new OSBuddyDataModel(
                dataObj.overall_average,
                dataObj.buy_average,
                dataObj.buy_quantity,
                dataObj.sell_average,
                dataObj.sell_quantity
            )
        );
    }
}