const DataComposer = require('./DataComposer.js');
const OSRSGEAPIFilter = require('../responseFilters/OSRSGEAPIFilter.js');
const OSRSGEDataModel = require('../../../models/OSRSGEDataModel.js');


module.exports = class extends DataComposer{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSRSGEAPIFilter,
            this.createDataModelObj
        );
    }

    static createDataModelObj(dataObj){
        return new OSRSGEDataModel({
            osrsGePrice: dataObj.current.price
        });
    }
}