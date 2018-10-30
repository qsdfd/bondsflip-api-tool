const DataExtractor = require('./DataExtractor.js');
const OSBuddyAPISummaryClient = require('../http/OSBuddyAPISummaryClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static responsePromise(){
        return this.createResponsePromise(
            OSBuddyAPISummaryClient.getResponse(),
            `data[${cnsts.BOND_ID}]`
        );
    }
}