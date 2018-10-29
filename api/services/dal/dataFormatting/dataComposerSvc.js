const dataExtractorSvc = require('./dataExtractorSvc.js');


module.exports.composeBondData = function(){
    let priceDataView = {};
    return new Promise((resolve, reject) => {
        dataExtractorSvc.getBondPricesDataFromOSBuddyAPISummaryFromRSBuddy()
            .then(function(data){
                priceDataView.avgPrice = data.overall_average;
                priceDataView.avgBuyPrice = data.buy_average;
                priceDataView.avgSellPrice = data.sell_average;
                return resolve(priceDataView);
            })
            .catch(function(err){
                return reject(err);
            });
    });
}