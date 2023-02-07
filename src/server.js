const cors = require("cors");
const express = require("express");
const gifRouter = require("./routes/gifs.routes");


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/gif", gifRouter);








module.exports = app;
