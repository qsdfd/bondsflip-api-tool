const HttpClient = require('./HttpClient');
const cnsts = require('../../../constants');


module.exports = class extends HttpClient{
    static endpoint(){
        return this.createEndpoint(
            cnsts.OSRS_GE_API_URL,
            {
                item: cnsts.BOND_ID
            });
    }
}