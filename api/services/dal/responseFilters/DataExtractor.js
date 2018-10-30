const jsonFilterSvc = require('./helpers/jsonFilterSvc.js');


module.exports = class {
    static getData(){
        return this.responsePromise();
    }

    static createResponsePromise(promise, filterPath){
        return promise
            .then(function(res){
                return jsonFilterSvc.getJsonByStringPath(res, filterPath);
            })
            .catch(function(err){
                return err
            });
    }
}