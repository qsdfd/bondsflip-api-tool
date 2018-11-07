const SchemaModel = require('./SchemaModel.js');
const OSRSGEGraphDataSchema = require('./schemas/OSRSGEGraphDataSchema.js');


module.exports = class extends SchemaModel{
    schema(){
        return OSRSGEGraphDataSchema;
    }

    constructor(daily, average) {
        super({
            osrsGraph: {
                daily: daily,
                average: average
            }
        });

    }

}