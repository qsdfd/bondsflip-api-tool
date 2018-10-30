const url = require('url');


module.exports.formatQueryForUrl = function(urlStr, queryObj){
    let endpoint = url.parse(urlStr);
    endpoint.query = queryObj;
    return url.format(endpoint);
}