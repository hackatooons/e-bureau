const nodemailer = require('nodemailer')
const nc = require('next-connect');
const cors = require('cors');
const morgan = require('morgan');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcryptjs');

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
        const otp = await otpGenerator.generate(6,{upperCaseAlphabets: false,specialChars: false})
        //hash otp
        const hashedOTP = await bcrypt.hash(otp,10)
        //set mail options
        const mailOptions = {
            from: process.env.NODEMAILER_SENDER_ID,
            to: req.body.email,
            text: `Your otp for verification is ${otp}`
        }
        //send mail
        transport.sendMail(mailOptions,(error,info)=> {
            if(error){
                res.status(400).json({success:false})
                return;
            }
        })
        res.status(200).json({data: hashedOTP})
    })

export default handler