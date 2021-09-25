const mongoose = require('mongoose')

const crimeSchema = new mongoose.Schema({
  victim: {
    type: String,
    require: true,
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  suspect: {
    type: String,
    require: true,
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  crimeType: {
    type: String,
    require: true,
  },
  descr: {
    type: String,
    require: true,
    maxlength: [200, 'Description cannot be more than 200 characters'],
  },
  place: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.models.Crime || mongoose.model('Crime', crimeSchema)
