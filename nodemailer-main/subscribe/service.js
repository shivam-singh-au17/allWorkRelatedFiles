const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const config = require("../../../sample.config");


var mainUser = nodemailer.createTransport(config.MAIL.TRANSPORT);

const sentEmailTemplate = {
    viewEngine: {
        partialsDir: path.join(__dirname, "./views"),
        defaultLayout: false,
    },
    viewPath: path.join(__dirname, "./views"),
};

mainUser.use("compile", hbs(sentEmailTemplate));


const post = () => async (req, res) => {
    try {
        const sendMail = {
            from: `${config.MAIL.SENDERADDRESS} <${config.MAIL.TRANSPORT.auth.user}>`,
            to: [`${config.MAIL.TRANSPORT.auth.user}`, `${req.body.email}`],
            subject: "Subscription Subject",
            template: "emailTemplate",
            context: {
                email: req.body.email,
            }
        };

        mainUser.sendMail(sendMail, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: " + info.response);
        });

        return res.status(200).send("Message sent successfully");

    } catch (err) {
        return res.status(400).send(err.message);
    }
};


module.exports = () => ({
    post: post()
});

