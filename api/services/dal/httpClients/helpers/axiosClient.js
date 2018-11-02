const axios = require('axios');


module.exports.get = function(url){
    return axios.get(url)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
}