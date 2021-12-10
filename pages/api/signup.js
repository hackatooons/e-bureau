import nc from 'next-connect'
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from '../../utils/dbConnect'
import signup from '../../models/signup'

dbConnect()

const handler = nc()
    .use(morgan('dev'))
    .use(cors())
    .post(async (req, res) => {
        try{
            //check if user already exist or not
            var findData = await signup.find({email: req.body.email})
            if(findData.length > 0){
                res.status(201).json({data: 'Already Exists'})
                return
            }
            findData = await signup.find({mobile: req.body.mobile})
            if(findData.length > 0){
                res.status(201).json({data: 'Already Exists'})
                return
            }
            //save user to db
            const data = new signup(req.body)
            await data.save()
            res.status(200).json({data: 'signup success'})
        }catch(error){
            res.statusCode(400).json({success: false})
        }
    })
export default handler