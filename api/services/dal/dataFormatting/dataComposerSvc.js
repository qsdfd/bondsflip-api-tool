const OSBuddyDataModel = require('../../../models/OSBuddyDataModel.js');
const OSBuddyAPISummaryFilter = require('../responseFilters/OSBuddyAPISummaryFilter.js');


module.exports.composeBondData = function(){
    return new Promise((resolve, reject) => {
        OSBuddyAPISummaryFilter.getData()
            .then(function(data){
                return resolve(
                    new OSBuddyDataModel({
                        avgPrice : data.overall_average,
                        avgBuyPrice : data.buy_average,
                        avgSellPrice : data.sell_average
                    })
                );
            })
            .catch(function(err){
                return reject(err);
            });
    });
}