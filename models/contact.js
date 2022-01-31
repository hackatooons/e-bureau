const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    email: {
        type: 'string',
        require: true,
    },
    message: {
        type: 'string',
        require: true,
    }
})

module.exports = mongoose.models.contact || mongoose.model('contact', contactSchema);