import nc from 'next-connect'
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from '../../../utils/dbConnect'
import contact from '../../../models/contact'

dbConnect()

const handler = nc()
  .use(morgan('dev'))
  .use(cors())
  //Get a specific record
  .get(async (req, res) => {
    try {
      const contacts = await contact.find();
      res.status(200).json({ data: contacts })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

export default handler
