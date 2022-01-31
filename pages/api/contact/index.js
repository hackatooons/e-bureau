import nc from 'next-connect'
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from '../../../utils/dbConnect'
import contact from '../../../models/contact'
import bcrypt from 'bcryptjs'

dbConnect()

const handler = nc()
    .use(morgan('dev'))
    .use(cors())
    .post(async (req, res) => {
        try{
            //save user response to db
            const data = new contact({email: req.body.email, message: req.body.message})
            console.log(req.body.email);
            console.log(req.body.message);
            await data.save()
            res.status(200).json({data: 'contact success'})
        }catch(error){
            res.statusCode(400).json({success: false})
        }
    })
export default handler