const DataExtractor = require('./DataExtractor');
const OSBuddyAPISummaryClient = require('../httpClients/OSBuddyAPISummaryClient');
const cnsts = require('../../../constants');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            OSBuddyAPISummaryClient,
            `data[${cnsts.BOND_ID}]`
        );
    }
}