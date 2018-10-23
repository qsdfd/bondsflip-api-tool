var ctrl = require('../controllers/bondFlipCtrl');

module.exports = function(app) {
    app.route('/flipdata').get(ctrl.getBondsFlipData);
    app.route('/rawdata').get(ctrl.);
};
