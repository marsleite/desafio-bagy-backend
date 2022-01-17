const nodemailer = require('nodemailer');

class SendEmail {
  constructor() {
    this.config = {
      host: 'smtp.umbler.com',
      port: 587,
      secure: false,
      auth: {
        user: 'marcelo@marsleite.com.br',
        pass: '928010Mgr*',
      },
    };
  }

  async send(data) {
    const transporter = nodemailer.createTransport(this.config);

    transporter.sendMail({
      from: 'Marcelo Leite <marcelo@marsleite.com.br>',
      to: `${data.email}`,
      subject: 'CONFIRMAÇÃO DO PEDIDO - Node.js',
      text: `Olá, tudo bem ${data.name}`,
      html: `<b>Olá, tudo bem?</b><p> O seu produto ${data.produto} chegará em breve; qtd: ${data.quantity}`,
    }).then((info) => {
      console.log(info);
    }).catch((err) => {
      console.log(err);
    });
  }
}

module.exports = { SendEmail };
