const { Schema, model } = require("mongoose");

const GifSchema = Schema({
    
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: false
    }

});

module.exports = model("Gif", GifSchema, "gifs");