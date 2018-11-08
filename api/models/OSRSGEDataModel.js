const SchemaModel = require('./SchemaModel');
const OSRSGEDataSchema = require('./schemas/OSRSGEDataSchema');


module.exports = class extends SchemaModel{
    schema(){
        return OSRSGEDataSchema;
    }

    constructor(osrsGePrice) {
        super({
            osrsApi : {
                osrsGePrice: osrsGePrice
            }
        });

    }

}