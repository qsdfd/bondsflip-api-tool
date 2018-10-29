const dataComposerSvc = require('../dal/dataFormatting/dataComposerSvc.js');
let PriceDataView = require('../../schemas/bondPricesDataSchema.js');
const bondFlipPricesCalculatorSvc = require('./bondFlipPricesCalculatorSvc.js');


module.exports.getBondsFlipData = function(){
    dataComposerSvc.composeBondData()
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){
            console.log(err)
        })
}