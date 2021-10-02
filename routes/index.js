/*File name:index.js*/
/*Name : Kyeongbin Noh*/
/*StudentID: 301130132*/
/*Date : OCT 1*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home', });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects', });
});


/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', });
});

module.exports = router;
