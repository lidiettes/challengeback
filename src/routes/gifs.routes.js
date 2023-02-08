const express = require("express");
const fileUpload = require("express-fileupload");
const router = express.Router();
const { getAllGifs, createGif, deleteGif } = require("../controller/gifs.controller")


router.get('/gif', getAllGifs)

router.post('/gif', createGif)

router.delete('/gif/:id', deleteGif)


module.exports = router;