import formidable from "formidable";
import fs from "fs";
const cloudinary = require("../../common/config/cloudinaryConfig");
export const config = {
  api: {
    bodyParser: false
  }
};

// const post = async (req, res) => {
//   const form = new formidable.IncomingForm();
//   form.parse(req, async function (err, fields, files) {
//     await saveFile(files.file);
//     console.log(req.fields)
//     // return res.status(201).send("");
//     res.status(200).json({data: 'ok'});
//   });
// };

const post = async (req, res) => {
    const form = new formidable.IncomingForm();
    
    form.parse(req, async function (err, fields, files) {

        // const data = fs.readFileSync(files.path);
        // fs.writeFileSync(`./public/${files.name}`, data);

        // console.log(data)
        console.log("about to parse");
      return res.status(201).send("");


    });
  };

const saveFile = async (file) => {
//   const data = fs.readFileSync(file.path);
  const result = await cloudinary.uploader.upload(file.path);
//   fs.writeFileSync(`./public/${file.name}`, data);
//   await fs.unlinkSync(file.path);
//   console.log(result.url)
//   res.status(200).json({});
    console.log(result);
    return result
};


export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
