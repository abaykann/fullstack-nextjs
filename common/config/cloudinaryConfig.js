import { config, uploader } from 'cloudinary';
import constants from '../constants/constants';

// const cloudinaryConfig = () => config({
//     cloud_name: constants.CLOUDINARY_CLOUD_NAME,
//     api_key: constants.CLOUDINARY_API_KEY,
//     api_secret: constants.CLOUDINARY_API_SECRET,
//  });

// export { cloudinaryConfig, uploader };


const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: constants.CLOUDINARY_CLOUD_NAME,
    api_key: constants.CLOUDINARY_API_KEY,
    api_secret: constants.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;