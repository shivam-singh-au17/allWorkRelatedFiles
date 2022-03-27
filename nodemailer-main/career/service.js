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
        partialsDir: path.resolve("./routes/career/views"),
        defaultLayout: false,
    },
    viewPath: path.resolve("./routes/career/views"),
};

mainUser.use("compile", hbs(sentEmailTemplate));


const post = () => async (req, res) => {
    try {
        const sendMail = {
            from: `${config.SENDERADDRESS} <${config.ADMINEMAIL}>`,
            to: [`${config.ADMINEMAIL}`, `${req.body.email}`],
            subject: "Subject For Career Email",
            template: "emailTemplate",
            context: {
                position: req.body.position,
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                qualification: req.body.qualification,
                location: req.body.location,
                experience: req.body.experience,
                userCv: req.body.userCv,
            },
            attachments: [{ filename: "iTAX.png", path: "./routes/career/attachments/iTAX.png" }],
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

