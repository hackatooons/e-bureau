import nc from 'next-connect'
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from '../../../utils/dbConnect'
import Gd from '../../../models/Gd'

dbConnect()

const handler = nc()
  .use(morgan('dev'))
  .use(cors())
  // Find all records
  .get(async (req, res) => {
    try {
      const gd = await Gd.find({})

      res.status(200).json({ data: gd })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })
  // Add a record
  .post(async (req, res) => {
    try {
      const gd = await Gd.create(req.body)

      res.status(201).json({ data: gd })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

export default handler
