const express = require("express");
const router = express.Router();
const { getAllGifs, createGif } = require("../controller/gifs.controller")


router.get('/get/', getAllGifs)

router.post('/', fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}), createGif)


module.exports = router;