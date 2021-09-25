const mongoose = require('mongoose')

const gdSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  age: {
    type: String,
    require: true,
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  identificationTtype: {
    type: String,
    require: true,
  },
  identificationNumber: {
    type: String,
    require: true,
  },
  place: {
    type: String,
    require: true,
  },
  descr: {
    type: String,
    maxlength: [200, 'Description cannot be more than 200 characters'],
  },
})

module.exports = mongoose.models.Gd || mongoose.model('Gd', gdSchema)
