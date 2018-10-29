const dataComposerSvc = require('../dal/dataFormatting/dataComposerSvc.js');
const bondFlipPricesCalculatorSvc = require('./bondFlipPricesCalculatorSvc.js');
let RootSchema = require('../../models/SchemaModel.js');


module.exports.getBondsFlipData = function(){
    dataComposerSvc.composeBondData()
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){
            console.log(err)
        })
}

// new RootSchema(null);

dataComposerSvc.composeBondData()
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })