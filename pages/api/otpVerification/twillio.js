const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)
const nc = require('next-connect')
const cors = require('cors')
const morgan = require('morgan')
const otpGenerator = require('otp-generator')
const bcrypt = require('bcryptjs')

const handler = nc()
  .use(morgan('dev'))
  .use(cors())
  .post(async (req, res) => {
    console.log(accountSid, authToken)
    //generate otp
    const otp = await otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    })
    //hash otp
    const hashedOTP = await bcrypt.hash(otp, 10)
    //send otp
    client.messages
      .create({
        body: `Your OTP is ${otp}`,
        from: process.env.TWILLIO_NUMBER,
        to: `${req.body.mobile}`,
      })
      .then((msg) => {
        res.status(200).json({ data: hashedOTP })
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })

export default handler
