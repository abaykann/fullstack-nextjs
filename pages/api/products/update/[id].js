import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization';

export default async function handler(req, res) {
    if(req.method !== 'PUT') return res.status(405).end();

    // const auth = await authorization(req, res);

   try{
    const { id } = req.query;
    const { productName, price, disc, categoryId, imageUrl, pubId, desc } = req.body;

    let getDisc = disc;
    if (!getDisc || getDisc > 100) {
        getDisc = 0
    }
    const getNetPrice = price - (price *(getDisc / 100)); 
    // const refId = generateRefId()

    
    const update = await db('products')
                            .where({ id })
                            .update({
                                productName,
                                price,
                                disc : getDisc,
                                categoryId,
                                imageUrl,
                                // pubId : refId,
                                desc,
                                netPrice: getNetPrice,
                            });
    
    const updatedData = await db('products').where({ id })
    
    res.status(200);
    res.json({
        message: 'Product updated successfully',
        data: updatedData
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