const DataExtractor = require('./DataExtractor.js');
const OSRSGEAPIClient = require('../http/OSRSGEAPIClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static responsePromise(){
        return this.createResponsePromise(
            OSRSGEAPIClient.getResponse(),
            `data`
        );
    }
}