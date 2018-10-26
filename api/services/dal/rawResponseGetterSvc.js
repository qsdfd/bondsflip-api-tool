const httpClientSvc = require('./http/httpClientSvc.js');
const url = require('url')
const cnsts = require('../../constants');


module.exports.getOSBuddyAPIResponse = function (){
    return get(getOSBuddyAPIEndpoint());
}

module.exports.getOsrsGeAPIResponse = function (){
    return get(getOsrsGeAPIEndpoint());
}

module.exports.getOSBuddyAPISummaryOfRSBuddyResponse = function (){
    return get(getOSBuddyAPISummaryEndpoint(cnsts.OSBUDDY_GR_PRICES_SUMMARY_RSBUDDY));
}

module.exports.getOSBuddyAPISummaryOfGoogleApisResponse = function (){
    return get(getOSBuddyAPISummaryEndpoint(cnsts.OSBUDDY_GR_PRICES_SUMMARY_GOOGLE_APIS));
}


function get(endpoint){
    return httpClientSvc.get(endpoint);
}

function getOSBuddyAPIEndpoint(){
    return getEndpoint(
        cnsts.OSBUDDY_GE_API_URL,
        {
            a: 'guidePrice',
            i: cnsts.BOND_ID
        });
}

function getOsrsGeAPIEndpoint(){
    return getEndpoint(
        cnsts.OSRS_GE_API_URL,
        {
            item: cnsts.BOND_ID
        });
}

function getOSBuddyAPISummaryEndpoint(endpointOfChoise){
    return getEndpoint(
        endpointOfChoise,
        {

        });
}

function getEndpoint(urlStr, query){
    let endpoint = url.parse(urlStr);
    endpoint.query = query;
    return url.format(endpoint);;
}