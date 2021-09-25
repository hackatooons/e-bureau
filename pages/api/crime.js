import nc from 'next-connect'
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from '../../utils/dbConnect'
import Crime from '../../models/Crime'

dbConnect()

const handler = nc()
  .use(morgan('dev'))
  .use(cors())
  .get(async (req, res) => {
    try {
      const crime = await Crime.find({})

      res.status(200).json({ data: crime })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })
  .post(async (req, res) => {
    try {
      const crime = await Crime.create(req.body)

      res.status(201).json({ data: crime })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

export default handler
