const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const config = require("../../config");


var mainUser = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.ADMINEMAIL,
        pass: config.PASSWORD,
    },
});

const sentEmailTemplate = {
    viewEngine: {
        partialsDir: path.resolve("./routes/contact/views"),
        defaultLayout: false,
    },
    viewPath: path.resolve("./routes/contact/views"),
};

mainUser.use("compile", hbs(sentEmailTemplate));


const post = () => async (req, res) => {
    try {
        const sendMail = {
            from: `${config.SENDERADDRESS} <${config.ADMINEMAIL}>`,
            to: [`${config.ADMINEMAIL}`, `${req.body.email}`],
            subject: req.body.subject,
            template: "emailTemplate",
            context: {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                subject: req.body.subject,
                message: req.body.message,
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

