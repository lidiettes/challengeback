const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
const gifRouter = require("./routes/gifs.routes");


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: '/tmp/'
}));


app.use("/api/", gifRouter);








module.exports = app;
