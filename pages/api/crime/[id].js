import nc from 'next-connect'
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from '../../../utils/dbConnect'
import Crime from '../../../models/Crime'

dbConnect()

const handler = nc()
  .use(morgan('dev'))
  .use(cors())
  //Get a specific record
  .get(async (req, res) => {
    try {
      const _id = req.query.id
      const crime = await Crime.findById(_id)
      res.status(200).json({ data: crime })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

export default handler
