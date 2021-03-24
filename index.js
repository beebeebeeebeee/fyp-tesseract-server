require("dotenv").config();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("public"))

const api = require("./router/api");
app.use("/api", api)



app.listen(port,()=>{console.log(`hosting on port ${port}`)})