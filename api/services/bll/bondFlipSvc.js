const dataFormatterSvc = require('../dal/dataExtractorSvc.js');
const PriceDataView = require('../../models/PriceDataView.js');
var joiModel = require('joi-model');
var Joi = require('joi');


//
// module.exports.getBondsFlipData = function(){
//     return new Promise((resolve, reject) => {
//         let priceDataView = new PriceDataView();
//
//         dataFormatterSvc.getBondPricesDataFromOsrsGeApi()
//             .then(function(data){
//                 priceDataView.osrsGePrice = data.item.current.price;
//                 return dataFormatterSvc.getBondPricesDataFromOSBuddyAPISummaryFromRSBuddy()
//             })
//             .then(function(data){
//                 priceDataView.avgPrice = data.overall_average;
//                 priceDataView.avgBuyPrice = data.buy_average;
//                 priceDataView.avgSellPrice = data.sell_average;
//
//                 // priceDataView.buyPrice = data.overall_average;
//                 // priceDataView.selPrice = data.overall_average;
//                 resolve(priceDataView);
//             })
//             .catch(function(err){
//                 reject(err);
//             });
//
//     });
// }

var priceDataViewObj = {}

dataFormatterSvc.getBondPricesDataFromOsrsGeApi()
    .then(function(data){
        priceDataViewObj.osrsGePrice = data.item.current.price;
        return dataFormatterSvc.getBondPricesDataFromOSBuddyAPISummaryFromRSBuddy()
    })
    .then(function(data){
        priceDataViewObj.avgPrice = data.overall_average;
        priceDataViewObj.avgBuyPrice = data.buy_average;
        priceDataViewObj.avgSellPrice = data.sell_average;

        // priceDataViewObj.buyPrice = data.overall_average;
        // priceDataViewObj.selPrice = data.overall_average;
        console.log(priceDataViewObj);
    })
    .catch(function(err){
        console.log(err);
    });

