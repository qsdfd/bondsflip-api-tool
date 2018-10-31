const jsonFilter = require('./helpers/jsonFilter.js');


module.exports = class {
    static filterData(){
        return this.filteredResponsePromise();
    }

    static createFilteredResponsePromise(client, filterPath){
        return client.getResponse()
            .then(function(res){
                return jsonFilter.getJsonByStringPath(res, filterPath);
            })
            .catch(function(err){
                return err
            });
    }
}