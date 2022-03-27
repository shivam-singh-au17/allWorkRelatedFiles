require("dotenv").config();
const express = require("express");
const app = express();


const port = process.env.PORT
app.use(express.json());
const connect = require("./src/config/db");


const aboutUsController = require("./src/controllers/index");


app.use(aboutUsController);


app.listen(port, async () => {
  await connect();
  console.log("Listening on post " + port);
})


module.exports = app;

