const SchemaModel = require('./SchemaModel.js');
const OSBuddyDataSchema = require('./schemas/OSBuddyDataSchema.js');


module.exports = class extends SchemaModel{
    schema(){
        return OSBuddyDataSchema;
    }
}