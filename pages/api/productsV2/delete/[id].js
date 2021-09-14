import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization';
const cloudinary = require("../../../../common/config/cloudinaryConfig");
export default async function handler(req, res) {
    if(req.method !== 'DELETE') return res.status(405).end();

    // const auth = await authorization(req, res);

    // const { id } = req.query;
    // const data = await db('products').where({ id }).first();
    // // JSON.parse(data)
    // console.log(data)
    // const result = await cloudinary.uploader.destroy(data.pubId);
    // console.log(result)

    // const deleteRow = await db('products').where({ id }).del();

    // res.status(200);
    // res.json({
    //     message: 'Product deleted successfully'
    // });

    try {
        const { id } = req.query;
        const data = await db('products').where({ id }).first();
        // JSON.parse(data)
        console.log(data)
        const result = await cloudinary.uploader.destroy([data.pubId]);
        console.log(result)

        const deleteRow = await db('products').where({ id }).del();

        res.status(200);
        res.json({
            message: 'Product deleted successfully'
    });

    }catch (err) {
        res.status(500).json({
          error: 'something is wrong',
          status: 'false',
          code: 500
        });
        console.log(err);
    }
}
