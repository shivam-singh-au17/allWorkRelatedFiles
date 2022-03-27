const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let aboutUsSchema = new Schema(
    {
        About: {
            Banner: { type: String, required: true },
            Content: { type: String, required: true },
        },
        SixItem: {
            Header: { type: String, required: true },
            Descrption: { type: String, required: true },
            File_Input: { type: String, required: true },
            Status: { type: Boolean, required: true, default: true },
            Sequence_No: { type: Number, required: true },
        },
        OurTeam: {
            First_Name: { type: String, required: true },
            Last_Name: { type: String, required: true },
            Qualification: { type: String, required: true },
            Banner: { type: String, required: true },
            Status: { type: Boolean, required: true, default: true },
            Facebook: { type: String, required: true },
            Twitter: { type: String, required: true },
            Instagram: { type: String, required: true },
            Linkedin: { type: String, required: true },
            Decription: { type: String, required: true },
            Photo: { type: String, required: true },
            Sequence_No: { type: Number, required: true },
        }
    },
    { timestamps: true }
);


let AboutUs = mongoose.model("aboutUs", aboutUsSchema);

module.exports = { AboutUs };
