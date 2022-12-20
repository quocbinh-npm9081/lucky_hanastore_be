import cloudinary from 'cloudinary';
const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
    api_key: String(process.env.CLOUD_API_KEY),
    cloud_name: String(process.env.CLOUDINARY_NAME),
    api_secret: String(process.env.CLOUD_API_SECRET),
    secure: true
})

export default cloudinaryV2;