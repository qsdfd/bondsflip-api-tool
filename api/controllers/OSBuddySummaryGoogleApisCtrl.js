const RootController = require('./RootController');
const CalculatorParametersDataModel = require('../models/CalculatorParametersDataModel');
const OSBuddySummaryGoogleApisSvc = require('../services/bll/OSBuddySummaryGoogleApisSvc');


module.exports = class extends RootController{
    static createResponse(parameterObj){
        return OSBuddySummaryGoogleApisSvc.processData(parameterObj);
    }

    static createParamModelObj(req){
        return new CalculatorParametersDataModel({
            parameters : {
                profitMargin: Number(req.query.profitMargin),
                optimisticRounding: JSON.parse(req.query.optimisticRounding)
            }
        })
    }
}