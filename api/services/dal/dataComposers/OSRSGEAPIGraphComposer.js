const DataComposerDecorator = require('./DataComposerDecorator.js');
const OSRSGEAPIGraphFilter = require('../responseFilters/OSRSGEAPIGraphFilter.js');
const OSRSGEGraphDataModel = require('../../../models/OSRSGEGraphDataModel.js');
const objectProcessorSvc = require('./helpers/objectProcessorSvc');



module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSRSGEAPIGraphFilter,
            dataObj => new OSRSGEGraphDataModel(
                objectProcessorSvc.getLastItemOfObject(dataObj.daily),
                objectProcessorSvc.getLastItemOfObject(dataObj.average)
            )
        );
    }
}