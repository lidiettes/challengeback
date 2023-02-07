import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: 'sample',
    api_key: 'dfz4bu04u',
    api_secret: 'sPfiHCh1iCjBVxtafrYiBQn9h50',
    secure: true
});



export async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'replit'
    })
}


export async function deleteImage(publicId){
    return await cloudinary.upload.destroy(publicId)
}