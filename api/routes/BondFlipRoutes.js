const Route = require('../models/RouteModel');

const OSBuddySummaryCtrl = require('../controllers/OSBuddySummaryCtrl');
const OSBuddySummaryGoogleApisCtrl = require('../controllers/OSBuddySummaryGoogleApisCtrl');


const baseUrl = '/bond';

module.exports = [
    new Route(`${baseUrl}/summary/osbuddy`, OSBuddySummaryCtrl),
    new Route(`${baseUrl}/summary/googleapis`, OSBuddySummaryGoogleApisCtrl)
];

