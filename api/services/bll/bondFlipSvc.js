const OSBuddyAPISummaryComposer = require('../dal/dataComposers/OSBuddyAPISummaryComposer.js');
const OSRSGEAPIComposer = require('../dal/dataComposers/OSRSGEAPIComposer.js');

module.exports.getBondsFlipData = function(){
    return OSRSGEAPIComposer.composeData(
        OSBuddyAPISummaryComposer.composeData())
        .then(function(data){
            return data;
        });
}