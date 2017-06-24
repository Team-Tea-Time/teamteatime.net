import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

class ContactController {
  constructor() {
    this.client = nodemailer.createTransport(sgTransport({
      auth: {
        api_key: process.env.SENDGRID_KEY
      }
    }));

    this.sendMessage = this.sendMessage.bind(this);
  }

  validate(req, res, next) {
    req.checkBody('email', 'No email address!').isEmpty();
    req.checkBody('email_address', 'Please provide an email address').isEmail();
    req.checkBody('message', 'Write something!').notEmpty();

    req.getValidationResult().then(result => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      next();
    });
  }

  sendMessage(req, res) {
    let email = {
      from: req.body.email_address,
      to: process.env.CONTACT_EMAIL,
      subject: '[TTT] Message',
      text: req.body.message
    };

    this.client.sendMail(email, (error, info) => {
      if (error) throw error;
      res.json(info);
    });
  }
}

export default new ContactController;
