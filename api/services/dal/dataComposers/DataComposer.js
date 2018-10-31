module.exports = class {

    static composeData(){
        return this.composedDataPromise();
    }

    static createComposedDataPromise(extractor, createDataModelObj){
        return new Promise((resolve, reject) => {
            extractor.filterData()
                .then(function(data){
                    return resolve(createDataModelObj(data));
                })
                .catch(function(err){
                    return reject(err);
                });
        });
    }
}