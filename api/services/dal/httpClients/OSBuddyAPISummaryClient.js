const HttpClient = require('./HttpClient');
const cnsts = require('../../../constants');


module.exports = class extends HttpClient{
    static endpoint(){
        return this.createEndpoint(
            cnsts.OSBUDDY_GR_PRICES_SUMMARY_RSBUDDY,
            {});
    }
}