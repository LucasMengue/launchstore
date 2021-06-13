const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3b678a1ccf7e8e",
    pass: "6292afca46fdc6",
  },
});
