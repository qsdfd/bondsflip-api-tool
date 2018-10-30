const HttpClient = require('./HttpClient.js');
const cnsts = require('../../../constants');


module.exports = class extends HttpClient{
    static endpoint(){
        return this.createEndpoint(
            cnsts.OSBUDDY_GE_API_URL,
            {
                a: 'guidePrice',
                i: cnsts.BOND_ID
            });
    }
}