// import { v2 as cloudinary } from 'cloudinary'
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require("../config/config")
const { v2: cloudinary } = require("cloudinary")

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});



async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'replit'
    })
}


async function deleteImage(publicId) {
    return await cloudinary.upload.destroy(publicId)
}

module.exports = { uploadImage, deleteImage }