const Gif = require("../models/gifs.model");
const { uploadImage, deleteImage } = require("../utils/cloudinary");

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




        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            gif.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            console.log(result)

            await FileSystem.unlink(req.files.image.tempFilePath)


        }






        await gif.save();
        res.json(201).json({ message: 'Successfully created gif', data: gif });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteGif = async (req, res) => {

    try {
        const gif = await Gif.findByIdAndDelete(req.params.id)

        if (!gif) return res.status(404).json({
            message: 'gif does not exist'
        })
        await deleteImage(gif.public_id)

        return res.json(gif)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createGif,
    getAllGifs,
    deleteGif

}