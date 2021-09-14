import db from '../../../libs/db';
import bcrypt from 'bcryptjs';
import generateRefId from '../../../common/helper/generateRefId';

export default async function handler(req, res) {
    if(req.method !== 'POST') return res.status(405).end();

    // const { email, password } = req.body;

    // const salt = bcrypt.genSaltSync(10);
    // const passwordHash = bcrypt.hashSync(password, salt);

    // const register = await db('users').insert({
    //     email,
    //     password: passwordHash
    // });
    // console.log(register)

    // const registeredUser = await db('users')
    //                                 .where({ id: register })
    //                                 .first();
    // res.status(200);
    // res.json({
    //     message: 'User registered successfully',
    //     data: registeredUser
    // });

    const { email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const refId = generateRefId()

    const register = await db('users').insert({
        email : req.body.email,
        password: passwordHash,
        refId: refId
    });
    const registeredUser = await db('users')
                                    .where({ refId: refId })
    console.log(registeredUser);

    res.status(200);
    res.json({
        message: 'User registered successfully',
        data:{
            registeredUser
        }
    });

    
}
