const rawResponseGetterSvc = require('./rawResponseGetterSvc.js');
const jsonDataAccessorSvc = require('./jsonDataAccessorSvc.js');
const cnsts = require('../../constants');


module.exports.getBondPricesDataFromOSBuddyAPISummaryFromRSBuddy = function(){
    return extractDataFromResponsePromiseByJsonPath(
        rawResponseGetterSvc.getOSBuddyAPISummaryOfRSBuddyResponse(),
        `data[${cnsts.BOND_ID}]`
    );
}

module.exports.getBondPricesDataFromOSBuddyAPISummaryFromGoogleApis = function(){
    return extractDataFromResponsePromiseByJsonPath(
        rawResponseGetterSvc.getOSBuddyAPISummaryOfGoogleApisResponse(),
        `data[${cnsts.BOND_ID}]`
    );
}

module.exports.getBondPricesDataFromOsrsGeApi = function(){
    return extractDataFromResponsePromiseByJsonPath(
        rawResponseGetterSvc.getOsrsGeAPIResponse(),
        `data`
    );
}

function extractDataFromResponsePromiseByJsonPath(rawResponsePromise, jsonPath) {
    return rawResponsePromise
        .then(function(res){
            return jsonDataAccessorSvc.getJsonByStringPath(res, jsonPath);
        })
        .catch(function(err){
            return err
        });
}
