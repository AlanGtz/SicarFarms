var express = require('express');
       i18n = require('i18n');

const hostname = '0.0.0.0';
          port = 5000;

i18n.configure({
  locales:['es', 'en'],
  directory: __dirname + '/config/locals',
  defaultLocale: 'es'
});

var app = express();
app.use(i18n.init);

app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/we_are', function(req, res) {
  res.render('we_are');
});

app.get('/we_plant', function(req, res) {
  res.render('we_plant');
});

app.get('/we_pack', function(req, res) {
  res.render('we_pack');
});

app.get('/we_ship', function(req, res) {
  res.render('we_ship');
});

app.get('/we_care', function(req, res) {
  res.render('we_care');
});

app.get('/products', function(req, res) {
  res.render('products');
});

app.get('/mexican_lemon', function(req, res) {
  res.render('mexican_lemon');
});

app.get('/persian_lemon', function(req, res) {
  res.render('persian_lemon');
});

app.get('/tomatoe', function(req, res) {
  res.render('tomatoe');
});

app.get('/pineapple', function(req, res) {
  res.render('pineapple');
});

app.get('/coconut', function(req, res) {
  res.render('coconut');
});

app.get('/tamarind', function(req, res) {
  res.render('tamarind');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.get('/news', function(req, res) {
  res.render('news');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
