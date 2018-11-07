const axios = require('axios');


module.exports.get = url =>
    axios.get(url)
        .then(response => response)
        .catch(error => error);