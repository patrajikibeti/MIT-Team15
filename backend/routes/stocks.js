var express = require('express');
var router = express.Router();
var { fsm } = require('../app.js');

/* GET users listing. */
router.get('/:symbol', function(req, res, next) {
  const { symbol } = req.params;

  const data = fsm.processed_data.filter((d) => d.symbol === symbol);

  res.status(200).json(data);
});

module.exports = router;
