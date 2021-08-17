const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    adress : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    }

})

module.exports = mongoose.model('admins', adminSchema)