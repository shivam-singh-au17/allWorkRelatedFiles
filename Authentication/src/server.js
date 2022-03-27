const express = require("express");
const connect = require("./configs/db");
const router = require("./controller");
const app = express();
app.use(express.json());

app.use("/", router) // besause of index.js file 

app.listen(3333, async () => {
    await connect();
    console.log("Listening on port 3333");
});

