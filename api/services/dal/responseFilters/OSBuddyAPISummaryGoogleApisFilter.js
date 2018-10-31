const DataExtractor = require('./DataExtractor.js');
const OSBuddyAPISummaryGoogleApisClient = require('../http/OSBuddyAPISummaryGoogleApisClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            OSBuddyAPISummaryGoogleApisClient,
            `data[${cnsts.BOND_ID}]`
        );
    }
}