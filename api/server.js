const app = require('express')();
const port = 80;
const bodyParser = require('body-parser');
const RouteSvc = require('./routes/RouteSvc');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

RouteSvc.associateRoutes(app);

const server = app.listen(port, () => {
    console.log(`API running on port ${port}...`);
    app.emit("appStarted");
});


module.exports = server;

module.exports.stop = function stop() {
    server.close();
};