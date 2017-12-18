const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'ahgv1195@gmail.com',
    pass: '#951111Chivas'
  }
});

let mailOptions = {
  from: '"SiCarFarms 🍋" <contacto@sicarfarms.com>',
  to: 'alan.gutierrez@tribe.cx',
  subject: 'Hello ✔',
  text: 'Tienes un mensaje con los siguientes detalles... Nombre: '+req.body.name+'Email: '+req.body.email+'Asunto: '+req.body.subject,
  html: '<p>Tienes un mensaje con los siguientes detalles:</p><ul><li>Nombre: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Asunto: '+req.body.subject+'</li></ul>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
