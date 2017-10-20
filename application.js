var express = require('express');
       i18n = require('i18n');

const hostname = '0.0.0.0';
          port = 8080;

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

app.get('/',function(req, res){
  res.render('index');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
