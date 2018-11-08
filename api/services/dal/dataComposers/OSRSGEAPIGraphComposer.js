const DataComposerDecorator = require('./DataComposerDecorator');
const OSRSGEAPIGraphFilter = require('../responseFilters/OSRSGEAPIGraphFilter');
const OSRSGEGraphDataModel = require('../../../models/OSRSGEGraphDataModel');
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