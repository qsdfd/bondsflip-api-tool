const BondFlipRoutes = require('./BondFlipRoutes');


const routes = [].concat(
    BondFlipRoutes
);

module.exports = class {

    static associateRoutes(app){
        routes.map(function (route) {
            app.route(route.endpoint).get((req, res) =>
                route.controller.respond(req, res)
            );
        });
    }

}