

const constants = {};
constants.BASE_URL = process.env.BASE_URL;
constants.HOST = 'localhost';
constants.USER = 'root';
constants.PASSWORD = '';
constants.DB_NAME = 'anekabaru2'
// constants.JWT_SECRET = process.env.JWT_SECRET || 'U8Nrx9r1Bsg1OXKZyaRlLIkhMr5thp5CQ3GXltyQht1v3wMtWi2LBWIIsXYdfXIPYPZt3thVp3IYnSb0W0BREaSkbWHBeFya70DC';
constants.JWT_SECRET = process.env.JWT_SECRET;
constants.CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
constants.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
constants.CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;


export default constants;