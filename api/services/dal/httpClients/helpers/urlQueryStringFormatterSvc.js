const url = require('url');


module.exports.formatQueryForUrl = (urlStr, queryObj) => {
    let endpoint = url.parse(urlStr);
    endpoint.query = queryObj;
    return url.format(endpoint);
}