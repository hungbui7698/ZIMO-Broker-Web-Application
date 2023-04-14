const mongoose = require('mongoose')

const appGroupSchema = mongoose.Schema({
    user:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    apps:{
        type:Array,
        required: true,
    },
    
})

module.exports = mongoose.model('AppGroup',appGroupSchema)