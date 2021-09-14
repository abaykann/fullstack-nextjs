// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//     res.statusCode = 200
//     res.end('Hello')
// }

// import middleware from '../../middlewares/middleware'
// import nextConnect from 'next-connect'

// const handler = nextConnect()
// handler.use(middleware)

// handler.post(async (req, res) => {
// //   console.log(req.body)
// //   console.log(req.files)
//     const aaa = req.body.productName
//     const abc = JSON.stringify(aaa)
//     console.log(req.files)
// //   const aaa = JSON.parse(req.body);
 
//   res.status(200);
//         res.json({
//             message: 'Product created successfully',
//             data: req.body
//         });
// })


// export const config = {
//   api: {
//     bodyParser: false
//   }
// }

// export default handler


import fs from "fs";
import nextConnect from 'next-connect';
import multer from 'multer';
import generateRefId from '../../common/helper/generateRefId';
import { multerUploads } from '../../common/config/multer';
const randomString = generateRefId(10)
const cloudinary = require("../../common/config/cloudinaryConfig");
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: './public/uploads',
//     filename: (req, file, cb) => cb(null, randomString + '-' +file.originalname),
//   }),
// });

const path = require("path");
const upload = multer({
    storage: multer.diskStorage({
    //   destination: './public/uploads',
    //   filename: (req, file, cb) => cb(null, randomString + '-' +file.originalname),
    }),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);  
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
          cb(new Error("File type is not supported"), false);
          return;
        }
        cb(null, true);
      },
  });

  
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// apiRoute.use(upload.array('image'));
// const result = await cloudinary.uploader.upload(req.file.path);


apiRoute.post(upload.single('image'),(req, res) => {
  console.log('req.body :', req.body);
  res.status(200).json({ data: req.body });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};