const SchemaModel = require('./SchemaModel');
const RouteSchema = require('./schemas/RouteSchema');


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