const DataExtractor = require('./DataExtractor.js');
const OSRSGEAPIGraphClient = require('../httpClients/OSRSGEAPIGraphClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            OSRSGEAPIGraphClient,
            "data"
        );
    }
}