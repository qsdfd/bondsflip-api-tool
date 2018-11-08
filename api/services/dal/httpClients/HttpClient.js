const axiosClient = require('./helpers/axiosClient');
const urlQueryStringFormatterSvc = require('./helpers/urlQueryStringFormatterSvc.js')

module.exports = class {
    static getResponse(){
        return axiosClient.get(this.endpoint());
    }

    static createEndpoint(urlStr, query){
        return urlQueryStringFormatterSvc.formatQueryForUrl(urlStr, query);
    }
}