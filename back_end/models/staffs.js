const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({

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
    },
    birth : {
        type : Date,
        required : true
    },
    is_reseted : {
        type : Boolean,
        required : true
    },
    suspended : {
        type : Boolean,
        required : true
    }

})

module.exports = mongoose.model('staffs', staffSchema)