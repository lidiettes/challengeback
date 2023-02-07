const express = require("express");
const router = express.Router();
const { getAllGifs, createGif } = require("../controller/gifs.controller")


router.get('/get/', getAllGifs)

router.post('/', createGif)


module.exports = router;