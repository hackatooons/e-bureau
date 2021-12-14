const nodemailer = require('nodemailer')
const nc = require('next-connect');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const {generateOTP} = require('../../../utils/generateOTP')

//initalize nodemailer client
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_SENDER_ID,
        pass: process.env.NODEMAILER_SENDER_ID_PASSWORD
    }
})

const handler = nc()
    .use(morgan('dev'))
    .use(cors())
    .post(async (req, res) => {
        //generate otp
        const otp = generateOTP()
        //hash otp
        const hashedOTP = await bcrypt.hash(otp,10)
        //set mail options
        const mailOptions = {
            from: process.env.NODEMAILER_SENDER_ID,
            to: req.body.email,
            text: `Your otp for verification is ${otp}`
        }
        //send mail
        try {
            const rsp = await transport.sendMail(mailOptions)
            // console.log(rsp)
            res.status(200).json({data: hashedOTP})
        } catch (error) {
            console.log(error)
            res.status(400).json({success:false})
            return
        }
        
    })

export default handler