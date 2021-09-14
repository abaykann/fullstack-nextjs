// export default function handler(req, res) {
//     res.status(200);
//     res.json({
//         message: 'Ini testing post'
//     });
// }


// handler.post(async (req, res) => {
//     let data = req.body;
//     console.log(data)
  
//     res.json({ message: "ok" });
//   });


import formidable from 'formidable';
const cloudinary = require("../../common/config/cloudinaryConfig");
export const config = {
  api: {
    bodyParser: false,
  },
};

// export default async (req, res) => {
//   const form = new formidable.IncomingForm();
//   console.log(form);
//   form.uploadDir = "./public";
//   form.keepExtensions = true;
//   form.parse(req, (err, fields, files) => {
//     // console.log(files.file);
//      res.status(201).send("");
//   });
// };



export default async (req, res) => {
    if(req.method !== 'POST') return res.status(405).end();

    const form = new formidable.IncomingForm();

    // form.uploadDir = "./public";
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
     form.parse(req, async function (err, fields, files) {
    //   const result = await cloudinary.uploader.upload(files.file.path);
    //   console.log(result.public_id, fields)
    //    res.status(201).send("");
        try{
            // const result = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist'});
            const result = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist', height: 520, quality: "jpegmini", width: 780, crop: "fill", sign_url: true});
            if (result.public_id) {
                console.log(fields, result)
                res.status(201).send("");
            } 

        }catch (err) {
        res.status(500).json({
          error: 'something is wrong',
          status: 'false',
          code: 500
        });
        console.log(err);
      }
    });
  };
  