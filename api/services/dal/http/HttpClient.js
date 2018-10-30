const axios = require('axios');
const urlQueryStringFormatterSvc = require('./urlQueryStringFormatterSvc.js')

module.exports = class {

    static getResponse(){
        return axios.get(this.endpoint())
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    }

    static createEndpoint(urlStr, query){
        return urlQueryStringFormatterSvc.formatQueryForUrl(urlStr, query);
    }
}