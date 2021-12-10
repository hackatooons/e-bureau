const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    name: {
        type: 'string',
        require: true,
        maxlength: [40, 'Name cannot be more than 40 characters'],
    },
    email: {
        type: 'string',
        require: true,
    },
    mobile: {
        type: 'string',
        require: true,
    },
    password: {
        type: 'string',
        require: true,
    }
})

module.exports = mongoose.models.signup || mongoose.model('signup',signupSchema)