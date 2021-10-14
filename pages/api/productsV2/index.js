import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization';

export default async function handler(req, res) {
    if(req.method !== 'GET') return res.status(405).end();
    const auth = await authorization(req, res);

    try {

        const data = await db('products');

        res.status(200);
        res.json({
            // message: 'Product deleted successfully'
            code: 200,
            data:data
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