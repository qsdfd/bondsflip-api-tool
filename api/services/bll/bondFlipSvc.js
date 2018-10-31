// const dataComposerSvc = require('../dal/dataComposers/dataComposerSvc.js');
const OSBuddyAPISummaryComposer = require('../dal/dataComposers/OSBuddyAPISummaryComposer.js');
const OSRSGEAPIComposer = require('../dal/dataComposers/OSRSGEAPIComposer.js');


const bondFlipPricesCalculatorSvc = require('./bondFlipPricesCalculatorSvc.js');


// module.exports.getBondsFlipData = function(){
//     dataComposerSvc.composeBondData()
//         .then(function(data){
//             console.log(data)
//         })
//         .catch(function(err){
//             console.log(err)
//         })
// }

// OSBuddyAPISummaryComposer.composeData()
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(err){
//         console.log(err)
//     });


OSRSGEAPIComposer.composeData()
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })