const DataExtractor = require('./DataExtractor.js');
const OSBuddyAPIClient = require('../http/OSBuddyAPIClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static responsePromise(){
        return this.createResponsePromise(
            OSBuddyAPIClient.getResponse(),
            // unknown (api always down)
        );
    }
}