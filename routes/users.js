/*File name:users.ejs*/
/*Name : Kyeongbin Noh*/
/*StudentID: 301130132*/
/*Date : OCT 1*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('placeholder');
});

module.exports = router;
