const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    subject: { type: String, required: true},
    message: { type: String, required: true },   
},
    { timestamps: true }
);


let Contact = mongoose.model("contact", contactSchema);

module.exports = { Contact };
