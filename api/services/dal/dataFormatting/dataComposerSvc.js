const dataExtractorSvc = require('./dataExtractorSvc.js');
let OSBuddyDataModel = require('../../../models/OSBuddyDataModel.js');


// module.exports.composeBondData = function(){
//     let priceDataView = {};
//     return new Promise((resolve, reject) => {
//         dataExtractorSvc.getBondPricesDataFromOSBuddyAPISummaryFromRSBuddy()
//             .then(function(data){
//                 priceDataView.avgPrice = data.overall_average;
//                 priceDataView.avgBuyPrice = data.buy_average;
//                 priceDataView.avgSellPrice = data.sell_average;
//                 return resolve(priceDataView);
//             })
//             .catch(function(err){
//                 return reject(err);
//             });
//     });
// }


module.exports.composeBondData = function(){
    return new Promise((resolve, reject) => {
        dataExtractorSvc.getBondPricesDataFromOSBuddyAPISummaryFromRSBuddy()
            .then(function(data){
                return resolve(new OSBuddyDataModel({
                    avgPrice : data.overall_average,
                    avgBuyPrice : data.buy_average,
                    avgSellPrice : data.sell_average
                }));
            })
            .catch(function(err){
                return reject(err);
            });
    });
}