const DataExtractor = require('./DataExtractor.js');
const OSBuddyAPISummaryClient = require('../httpClients/OSBuddyAPISummaryClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            OSBuddyAPISummaryClient,
            `data[${cnsts.BOND_ID}]`
        );
    }
}