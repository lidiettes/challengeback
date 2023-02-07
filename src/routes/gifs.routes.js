const express = require("express");
const router = express.Router();
const { getAllGifs, createGif, deleteGif } = require("../controller/gifs.controller")


router.get('/gif/', getAllGifs)

router.post('/gif', fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}), createGif)

router.delete('/gif/:id', deleteGif)


module.exports = router;