const SchemaModel = require('./SchemaModel');
const OSRSGEGraphDataSchema = require('./schemas/OSRSGEGraphDataSchema');


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