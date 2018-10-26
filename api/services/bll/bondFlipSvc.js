const dataFormatterSvc = require('../dal/dataFormatterSvc.js');

dataFormatterSvc.getBondPricesDataFromOSBuddyAPISummaryFromRSBuddy()
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        return err
    });

dataFormatterSvc.getBondPricesDataFromOsrsGeApi()
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        return err
    });