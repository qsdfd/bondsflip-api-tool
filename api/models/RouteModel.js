const SchemaModel = require('./SchemaModel.js');
const RouteSchema = require('./schemas/RouteSchema.js');


module.exports = class extends SchemaModel{
    schema(){
        return RouteSchema;
    }

    constructor(route, ctrl){
        super({
            endpoint: route,
            controller: ctrl
        });
    }
}