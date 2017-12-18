var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('../views/index');
});

router.get('/we_are', function(req, res) {
  res.render('we_are');
});

router.get('/we_plant', function(req, res) {
  res.render('we_plant');
});

router.get('/we_pack', function(req, res) {
  res.render('we_pack');
});

router.get('/we_ship', function(req, res) {
  res.render('we_ship');
});

router.get('/we_care', function(req, res) {
  res.render('we_care');
});

router.get('/products', function(req, res) {
  res.render('products');
});

router.get('/mexican_lemon', function(req, res) {
  res.render('mexican_lemon');
});

router.get('/persian_lemon', function(req, res) {
  res.render('persian_lemon');
});

router.get('/tomatoe', function(req, res) {
  res.render('tomatoe');
});

router.get('/pineapple', function(req, res) {
  res.render('pineapple');
});

router.get('/coconut', function(req, res) {
  res.render('coconut');
});

router.get('/tamarind', function(req, res) {
  res.render('tamarind');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/blog', function(req, res) {
  res.render('blog');
});

router.get('/post', function(req, res) {
  res.render('post');
});

module.exports = router;
