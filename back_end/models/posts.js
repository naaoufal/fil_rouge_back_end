const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    user_id : {
        type : String,
        required : true
    },
    user_name : {
        type : String,
        required : true
    },
    is_valid : {
        type : String,
        required : true
    },
    stat_post : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        required : true
    },
    tag : {
        type : String,
        required : true
    }

})

module.exports = mongoose.model('posts', postsSchema)