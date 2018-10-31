const DataExtractor = require('./DataExtractor.js');
const OSRSGEAPIClient = require('../http/OSRSGEAPIClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            OSRSGEAPIClient,
            `data.item`
        );
    }
}