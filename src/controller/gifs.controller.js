const Gif = require("../models/gifs.model");

const getAllGifs = (req, res) => {
    const gifs = Gif.find({})

    artists.exec((error, data) => {
        if (error || null) {
            return res.status(404).json({
                status: "error",
                message: "Gif not found"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            message: "The gif are available"
        })
    })
}

const createGif = async (req, res) => {
    const { body } = req;
    try {
        const gif = new Gif({ ...body });
        await gif.save();
        res.json(201).json({ message: 'Successfully created gif', data: gif });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    createGif,
    getAllGifs,
   
}