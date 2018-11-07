const DataComposerDecorator = require('./DataComposerDecorator.js');
const OSRSGEAPIFilter = require('../responseFilters/OSRSGEAPIFilter.js');
const OSRSGEDataModel = require('../../../models/OSRSGEDataModel.js');


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