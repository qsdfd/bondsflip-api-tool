const OSBuddyAPISummaryComposer = require('../dal/dataComposers/OSBuddyAPISummaryComposer.js');
const OSRSGEAPIComposer = require('../dal/dataComposers/OSRSGEAPIComposer.js');
const OSRSGEAPIGraphComposer = require('../dal/dataComposers/OSRSGEAPIGraphComposer.js');


module.exports = class {
    static processData(parameterObj){
        return OSRSGEAPIComposer.composeData(
            OSRSGEAPIGraphComposer.composeData(
                OSBuddyAPISummaryComposer.composeData()));
    }
}