const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({

    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    adress : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    is_valid : {
        type : Boolean,
        required : true
    },
    suspended : {
        type : Boolean,
        required : true
    }

})

module.exports = mongoose.model('clients', clientSchema)