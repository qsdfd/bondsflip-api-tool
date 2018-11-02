module.exports = class {
    static composeData(composerPromise){
        return composerPromise ?
            this.composedDataPromise().then(function (composedData) {
                    return composerPromise.then(function (mergeData) {
                            return Object.assign(composedData, mergeData);
                        })
                })
            : this.composedDataPromise();
    }

    static createComposedDataPromise(filter, dataComposerFunc){
        return filter.filterData().then(function(data){
            return dataComposerFunc(data);
        });
    }
}