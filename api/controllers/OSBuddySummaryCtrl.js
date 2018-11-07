const RootController = require('./RootController');
const typeConverterSvc = require('./helpers/typeConverterSvc');
const CalculatorParametersDataModel = require('../models/CalculatorParametersDataModel');
const OSBuddySummarySvc = require('../services/bll/OSBuddySummarySvc');


module.exports = class extends RootController{
    static createResponse(parameterObj){
        return OSBuddySummarySvc.processData(parameterObj);
    }

    static createParamModelObj(req){
        return new CalculatorParametersDataModel({
            parameters : {
                profitMargin: typeConverterSvc.convertToNumber(req.query.profitMargin),
                optimisticRounding: typeConverterSvc.convertToBoolean(req.query.optimisticRounding)
            }
        })
    }
}