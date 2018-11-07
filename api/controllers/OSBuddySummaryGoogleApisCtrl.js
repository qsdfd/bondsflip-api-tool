const RootController = require('./RootController');
const typeConverterSvc = require('./helpers/typeConverterSvc');
const CalculatorParametersDataModel = require('../models/CalculatorParametersDataModel');
const OSBuddySummaryGoogleApisSvc = require('../services/bll/OSBuddySummaryGoogleApisSvc');


module.exports = class extends RootController{
    static createResponse(parameterObj){
        return OSBuddySummaryGoogleApisSvc.processData(parameterObj);
    }

    static createParamModelObj(req){
        return new CalculatorParametersDataModel(
            typeConverterSvc.convertToNumber(req.query.profitMargin),
            typeConverterSvc.convertToBoolean(req.query.optimisticRounding)
        );
    }
}