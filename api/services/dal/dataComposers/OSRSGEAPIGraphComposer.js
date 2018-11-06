const DataComposerDecorator = require('./DataComposerDecorator.js');
const OSRSGEAPIGraphFilter = require('../responseFilters/OSRSGEAPIGraphFilter.js');
const OSRSGEGraphDataModel = require('../../../models/OSRSGEGraphDataModel.js');
const objectProcessorSvc = require('./helpers/objectProcessorSvc');



module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSRSGEAPIGraphFilter,
            this.createDataModelObj
        );
    }

    static createDataModelObj(dataObj){
        return new OSRSGEGraphDataModel({
            osrsGraph: {
                daily: objectProcessorSvc.getLastItemOfObject(dataObj.daily),
                average: objectProcessorSvc.getLastItemOfObject(dataObj.average)
            }
        })
    }


}