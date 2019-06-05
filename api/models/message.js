const mongoose = require('mongoose')
const Schema = mongoose.Schema

let schema = new mongoose.Schema({
    msg_id: mongoose.Types.ObjectId,
    msg: {
        type: String,
        required: true
    },
    sent: {
        type: Boolean,
        // required: true
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    } 
})

module.exports = mongoose.model('Message', schema);