const OSBuddyAPISummaryComposer = require('../dal/dataComposers/OSBuddyAPISummaryComposer.js');
const OSRSGEAPIComposer = require('../dal/dataComposers/OSRSGEAPIComposer.js');
const OSRSGEAPIGraphComposer = require('../dal/dataComposers/OSRSGEAPIGraphComposer.js');


module.exports.getBondsFlipData = function(){
    return OSRSGEAPIComposer.composeData(
        OSRSGEAPIGraphComposer.composeData(
            OSBuddyAPISummaryComposer.composeData()))
        .then(function(data){
            return data;
        });
}