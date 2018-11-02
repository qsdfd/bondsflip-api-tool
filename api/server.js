const express = require('express');
const app = express();
const port = 80;
const bodyParser = require('body-parser');
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./routes/bondFlipRoutes');
routes(app);


const server = app.listen(port, () => {
    console.log(`API running on port ${port}...`);
    app.emit("appStarted");
});

function stop() {
    server.close();
}

module.exports = server;
module.exports.stop = stop;