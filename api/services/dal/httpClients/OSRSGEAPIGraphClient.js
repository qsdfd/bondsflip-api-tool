const HttpClient = require('./HttpClient');
const cnsts = require('../../../constants');


module.exports = class extends HttpClient{
    static endpoint(){
        return this.createEndpoint(
            `${cnsts.OSRS_GE_API_GRAPH_URL}${cnsts.BOND_ID}.json`,
            {});
    }
}