const jsonFilter = require('./helpers/jsonFilter.js');


module.exports = class {
    static getData(){
        return this.responsePromise();
    }

    static createResponsePromise(promise, filterPath){
        return promise
            .then(function(res){
                return jsonFilter.getJsonByStringPath(res, filterPath);
            })
            .catch(function(err){
                return err
            });
    }
}