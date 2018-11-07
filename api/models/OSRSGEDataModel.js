const SchemaModel = require('./SchemaModel.js');
const OSRSGEDataSchema = require('./schemas/OSRSGEDataSchema.js');


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