const svc = require('../services/bll/bondFlipSvc');

module.exports.getBondsFlipData = function(req, res){
  svc.getBondsFlipData()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
};