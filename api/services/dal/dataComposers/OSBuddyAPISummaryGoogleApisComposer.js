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
        return new OSBuddyDataModel(
            dataObj.overall_average,
            dataObj.buy_average,
            dataObj.buy_quantity,
            dataObj.sell_average,
            dataObj.sell_quantity
        );
    }
}