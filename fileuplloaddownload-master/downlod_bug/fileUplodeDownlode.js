const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, path.join(__dirname, "../routes/fileUplodeDownlode/uploads"));
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    }
});

module.exports = upload;
