const DataExtractor = require('./DataExtractor');
const OSBuddyAPISummaryGoogleApisClient = require('../httpClients/OSBuddyAPISummaryGoogleApisClient');
const cnsts = require('../../../constants');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            OSBuddyAPISummaryGoogleApisClient,
            `data[${cnsts.BOND_ID}]`
        );
    }
}