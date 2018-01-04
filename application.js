var express = require('express');
       i18n = require('i18n');
 bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080
nodemailer = require('nodemailer');
     crypt = require('./crypt');

const encryptedPassword = '0b63bfcf3ba88077';

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var routes = require('./config/routes.js');
app.use('/', routes);

app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.set('view engine', 'pug');

app.post('/contact/send', urlencodedParser, function(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'notificaciones.sicar@gmail.com',
      pass: crypt.decrypt(encryptedPassword)
    }
  });

  let mailOptions = {
    from: '"SiCarFarms 🍋" <contacto@sicarfarms.com>',
    to: 'alan.gutierrez@tribe.cx',
    subject: req.body.subject,
    text: 'Tienes un mensaje con los siguientes detalles... Nombre: '+req.body.name+' Email: '+req.body.email+' Interés: '+req.body.fruits,
    html: '<p>Tienes un mensaje con los siguientes detalles:</p><ul><li>Nombre: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Interés: '+req.body.fruits+'</li></ul>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Message sent: %s', info.messageId);
      res.redirect('back');
    }
  });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
