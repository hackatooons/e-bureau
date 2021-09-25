import nc from 'next-connect'
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from '../../../utils/dbConnect'
import Missing from '../../../models/Missing'

dbConnect()

const handler = nc()
  .use(morgan('dev'))
  .use(cors())
  // get all records
  .get(async (req, res) => {
    try {
      const missing = await Missing.find({})

      res.status(200).json({ data: missing })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })
  // Add a record
  .post(async (req, res) => {
    try {
      const missing = await Missing.create(req.body)

      res.status(201).json({ data: missing })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

export default handler
