const DataComposerDecorator = require('./DataComposerDecorator');
const OSRSGEAPIFilter = require('../responseFilters/OSRSGEAPIFilter');
const OSRSGEDataModel = require('../../../models/OSRSGEDataModel');


module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSRSGEAPIFilter,
            dataObj => new OSRSGEDataModel(
                dataObj.current.price
            )
        );
    }
}