const objectProcessorSvc = require('./helpers/objectProcessorSvc');


module.exports = class {
    static composeData(composerPromise){
        return composerPromise ?
            this.composedDataPromise().then(composedData =>
                composerPromise.then(mergeData =>
                    objectProcessorSvc.mergeTwoObjects(composedData, mergeData)))
            : this.composedDataPromise();
    }

    static createComposedDataPromise(filter, dataComposerFunc){
        return filter.filterData().then(data => dataComposerFunc(data));
    }
}