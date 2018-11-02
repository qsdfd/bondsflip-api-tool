const DataComposerDecorator = require('./DataComposerDecorator.js');
const OSBuddyAPISummaryFilter = require('../responseFilters/OSBuddyAPISummaryFilter.js');
const OSBuddyDataModel = require('../../../models/OSBuddyDataModel.js');


module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSBuddyAPISummaryFilter,
            this.createDataModelObj
        );
    }

    static createDataModelObj(dataObj){
        return new OSBuddyDataModel({
            avgPrice : dataObj.overall_average,
            avgBuyPrice : dataObj.buy_average,
            avgSellPrice : dataObj.sell_average
        });
    }
}