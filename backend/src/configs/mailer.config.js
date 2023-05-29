const nodemailer = require("nodemailer");

const transporterMailer = (mailProcess, passwordProcess) => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailProcess,
      pass: passwordProcess,
    },
  });
};

const mailOptions = (options) => {
  return options;
};

module.exports = {
  transporterMailer,
  mailOptions,
};
