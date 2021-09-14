import formidable from 'formidable';
import db from '../../../libs/db';

const cloudinary = require("../../../common/config/cloudinaryConfig");
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
    if(req.method !== 'POST') return res.status(405).end();

    const form = new formidable.IncomingForm();
     form.parse(req, async function (err, fields, files) {

       if(!files.file)return res.status(405).json({
        error: 'please attach your image',
        status: 'false',
        code: 403
       });

        try{
            const result = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist'});
            // const result = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist', height: 520, quality: "jpegmini", width: 780, crop: "fill", sign_url: true});
            if (result.public_id) {
                const { productName, price, disc, categoryId, imageUrl, pubId, desc } = fields;
                console.log(result)
                console.log(productName)

                let getDisc = disc;
                if (!getDisc || getDisc > 100) {
                    getDisc = 0
                }
                const getNetPrice = price - (price *(getDisc / 100));

                const payload = {
                  productName,
                  price,
                  disc : getDisc,
                  categoryId,
                  imageUrl: result.secure_url,
                  pubId : result.public_id,
                  desc,
                  netPrice: getNetPrice,
                }
                const create = await db('products').insert({
                  ...payload
                });
                const data = await db('products').where({ pubId: result.public_id }) 

                res.status(200);
                    res.json({
                        code: 200,
                        message: 'Product created successfully',
                        data: data
                 });
                // res.status(201).send("");
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
  