const DataComposerDecorator = require('./DataComposerDecorator.js');
const OSBuddyAPISummaryFilter = require('../responseFilters/OSBuddyAPISummaryFilter.js');
const OSBuddyDataModel = require('../../../models/OSBuddyDataModel.js');


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