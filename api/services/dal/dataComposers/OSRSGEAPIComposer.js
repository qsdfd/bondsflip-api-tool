const DataComposerDecorator = require('./DataComposerDecorator.js');
const OSRSGEAPIFilter = require('../responseFilters/OSRSGEAPIFilter.js');
const OSRSGEDataModel = require('../../../models/OSRSGEDataModel.js');


module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSRSGEAPIFilter,
            this.createDataModelObj
        );
    }

    static createDataModelObj(dataObj){
        return new OSRSGEDataModel({
            osrs_api : {
                osrsGePrice: dataObj.current.price
            }
        });
    }
}