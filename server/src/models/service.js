const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let serviceSchema = new Schema({
    position: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    qualification: { type: String, required: true },
    location: { type: String, required: true },
    experience: { type: String, required: true },
    cv: { type: String, required: true },
},
    { timestamps: true }
);


let Service = mongoose.model("service", serviceSchema);

module.exports = { Service };




