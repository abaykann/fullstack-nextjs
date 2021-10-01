import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization';
import formidable from 'formidable';

const cloudinary = require("../../../../common/config/cloudinaryConfig");
export const config = {
  api: {
    bodyParser: false,
  },
};


// export default async function handler(req, res) {
//     if(req.method !== 'PUT') return res.status(405).end();

//   const form = new formidable.IncomingForm();
//   const { id } = req.query;
//   const data = await db('products').where({ id }).first();
//    form.parse(req, async function (err, fields, files) {
//     // const { id } = req.query;
     
     

//     try {

//       if(!files.file)return(
//         console.log(data.imageUrl, 'akbar')
        
        
//       )


//       const destroy = await cloudinary.uploader.destroy([data.pubId]);
//       const result = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist'});
//       // const result = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist', height: 520, quality: "jpegmini", width: 780, crop: "fill", sign_url: true});

//       if (result.public_id) {

//           const { productName, price, disc, categoryId, imageUrl, pubId, desc } = fields;
//           console.log(result)
//           console.log(productName)

//           let getDisc = disc;
//           if (!getDisc || getDisc > 100) {
//               getDisc = 0
//         }

//       const getNetPrice = price - (price *(getDisc / 100)); 
//       const update = await db('products').where({ id })
//       .update({
//           productName,
//           price,
//           disc : getDisc,
//           categoryId,
//           imageUrl: result.secure_url,
//           pubId : result.public_id,
//           desc,
//           netPrice: getNetPrice,

//       });
//       const data = await db('products').where({ pubId: result.public_id }) 

//       res.status(200);
//           res.json({
//               code: 200,
//               message: 'Product created successfully',
//               data: data
//        });
//     }

//     }catch (err) {
//       res.status(500).json({
//         error: 'something is wrong',
//         status: 'false',
//         code: 500
//       });
//       console.log(err);
//     }
//   });
// };



export default async function handler(req, res) {
  if(req.method !== 'PUT') return res.status(405).end();

const form = new formidable.IncomingForm();
const { id } = req.query;
const data = await db('products').where({ id }).first();
 form.parse(req, async function (err, fields, files) {
   
   

  try {

    const { productName, price, disc, categoryId, imageUrl, pubId, desc } = fields;

    let getDisc = disc;
    if (!getDisc || getDisc > 100) {
        getDisc = 0
  }
    const getNetPrice = price - (price *(getDisc / 100)); 
    const reqBody = {
      productName,
      price,
      disc : getDisc,
      categoryId,
      desc,
      netPrice: getNetPrice,
  };

    if(!files.file){
      console.log(reqBody, 'akbar')

      const updateWithoutImage = await db('products').where({ id })
        .update({
          ...reqBody,
        });
        res.status(200);
            res.json({
                code: 200,
                message: 'Product updateWithoutImage successfully updated',
                data: reqBody
        });
     }


    const destroy = await cloudinary.uploader.destroy([data.pubId]);
    const result = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist'});
    // const result = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist', height: 520, quality: "jpegmini", width: 780, crop: "fill", sign_url: true});

    if (result.public_id) {

    const getNetPrice = price - (price *(getDisc / 100)); 
    const update = await db('products').where({ id })
    .update({
        ...reqBody,
        imageUrl: result.secure_url,
        pubId : result.public_id,
        netPrice: getNetPrice,

    });
    const data = await db('products').where({ pubId: result.public_id }) 

    res.status(200);
        res.json({
            code: 200,
            message: 'Product updated successfully',
            data: data
     });
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


// const { id } = req.query;      
//       try{
//         const dbData = await db('products').where({ id }).first();
//         const { productName, price, disc, categoryId, imageUrl, pubId, desc } = fields;

//         let getDisc = disc;
//         if (!getDisc || getDisc > 100) {
//             getDisc = 0
//         }
//         const getNetPrice = price - (price *(getDisc / 100));

//         const payload = {
//           productName,
//           price,
//           disc : getDisc,
//           categoryId,
//           desc,
//           netPrice: getNetPrice,
//         };

//         if(!files.file.path){
//           const updateWithoutImage = await db('products').where({ id })
//               .update({
//                  ...payload,
//               });

//             res.status(200);
//             res.json({
//                 code: 200,
//                 message: 'Product created successfully',
//                 data: updateWithoutImage
//         });

//         }


//         await cloudinary.uploader.destroy([dbData.pubId]);
//         const upload = await cloudinary.uploader.upload(files.file.path, {folder: 'abimanyu-florist'});

//           const update = await db('products').where({ id })
//             .update({
//                ...payload,
//                imageUrl: upload.secure_url,
//                pubId : upload.public_id,

//             });

//             // const data = await db('products').where({ pubId: result.public_id }) 
//               res.status(200);
//                 res.json({
//                     code: 200,
//                     message: 'created successfully',
//                     data: update
//              });


//       }catch (err) {
//       res.status(500).json({
//         error: 'something is wrong',
//         status: 'false',
//         code: 500
//       });
//       console.log(err);
//     }
  // });
// };




