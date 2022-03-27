const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
require('dotenv').config()

// initialize nodemailer
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shivamsingh8853mzp@gmail.com",
    pass: process.env.password,
  },
});

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

// use a template file with nodemailer
transporter.use("compile", hbs(handlebarOptions));


var mailOptions = {
  from: '"Ariantech Solutions" <shivamsingh8853mzp@gmail.com>', // sender address
  to: ["shivamsingh4458@gmail.com","shivam.singh@ariantechsolutions.in"], // list of receivers
  cc: "ss5095771@gmail.com",
  subject: "Welcome! - Ariantech Solutions",
  template: "emailTemplate", // the name of the template file i.e email.handlebars
  context: {
    name: "Shivam Singh", // replace {{name}} with Adebola
    company: "Ariantech Solutions", // replace {{company}} with My Company
  },
  attachments: [{ filename: "pic-1.jpeg", path: "./attachments/pic-1.jpeg" }],
};

// trigger the sending of the E-mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: " + info.response);
});



