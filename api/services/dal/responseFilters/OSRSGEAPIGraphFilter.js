const DataExtractor = require('./DataExtractor');
const OSRSGEAPIGraphClient = require('../httpClients/OSRSGEAPIGraphClient');
const cnsts = require('../../../constants');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            OSRSGEAPIGraphClient,
            "data"
        );
    }
}