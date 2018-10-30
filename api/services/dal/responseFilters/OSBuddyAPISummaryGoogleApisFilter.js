const DataExtractor = require('./DataExtractor.js');
const OSBuddyAPISummaryGoogleApisClient = require('../http/OSBuddyAPISummaryGoogleApisClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static responsePromise(){
        return this.createResponsePromise(
            OSBuddyAPISummaryGoogleApisClient.getResponse(),
            `data[${cnsts.BOND_ID}]`
        );
    }
}