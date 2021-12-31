const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    groupName : {
        type : String,
        required : true
    },
    groupOwner : {
        type : String,
        required : true
    },
    groupMessage : {
        type : String,
        required : true
    },
    groupReciever : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('groups', groupSchema)