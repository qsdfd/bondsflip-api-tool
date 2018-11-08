const DataExtractor = require('./DataExtractor');
const OSRSGEAPIClient = require('../httpClients/OSRSGEAPIClient');
const cnsts = require('../../../constants');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            OSRSGEAPIClient,
            `data.item`
        );
    }
}