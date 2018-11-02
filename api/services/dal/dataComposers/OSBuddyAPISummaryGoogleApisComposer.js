const DataComposerDecorator = require('./DataComposerDecorator.js');
const OSBuddyAPISummaryGoogleApisFilter = require('../responseFilters/OSBuddyAPISummaryGoogleApisFilter.js');
const OSBuddyDataModel = require('../../../models/OSBuddyDataModel.js');


module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSBuddyAPISummaryGoogleApisFilter,
            this.createDataModelObj
        );
    }

    static createDataModelObj(dataObj){
        return new OSBuddyDataModel({
            avgPrice : dataObj.overall_average,
            avgBuyPrice : dataObj.buy_average,
            avgSellPrice : dataObj.sell_average
        })    ;
    }
}