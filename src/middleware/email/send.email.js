const nodemailer = require('nodemailer');
require('dotenv').config();

class SendEmail {
  constructor() {
    this.config = {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    };
  }

  async send(data) {
    const transporter = nodemailer.createTransport(this.config);

    transporter.sendMail({
      from: 'Marcelo Leite <marcelo@marsleite.com.br>',
      to: `${data.email}`,
      subject: 'CONFIRMAÇÃO DO PEDIDO - Node.js',
      text: 'Olá, tudo bem',
      html: `<b>Olá, tudo bem?</b><p> O seu pedido está ${data.status} e está parcelado em ${data.portion}`,
    }).then((info) => {
      console.log(info);
    }).catch((err) => {
      console.log(err);
    });
  }
}

module.exports = { SendEmail };
