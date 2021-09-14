import db from '../../../libs/db';
// import authorization from '../../../middlewares/authorization';
import generateRefId from '../../../common/helper/generateRefId';
import moment from 'moment';

export default async function handler(req, res) {
    if(req.method !== 'POST') return res.status(405).end();
    
    // const auth = await authorization(req, res);
    try {
        const { productName, price, disc, categoryId, imageUrl, pubId, desc } = req.body;

        let getDisc = disc;
        if (!getDisc || getDisc > 100) {
            getDisc = 0
        }
        const getNetPrice = price - (price *(getDisc / 100)); 
        const refId = generateRefId()
        // const format1 = "YYYY-MM-DD HH:mm:ss"
        // const dateTime1 = moment(new Date()).format(format1);
    
        const create = await db('products').insert({
            productName,
            price,
            disc : getDisc,
            categoryId,
            imageUrl,
            pubId : refId,
            desc,
            netPrice: getNetPrice,
            // created_at: dateTime1,
            // updated_at: dateTime1
        });
    
        const data = await db('products').where({ pubId: refId }) 
        res.status(200);
        res.json({
            message: 'Product created successfully',
            data: data
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
