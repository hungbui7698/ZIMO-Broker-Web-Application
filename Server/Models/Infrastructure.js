const mongoose = require('mongoose')

const infraSchema = mongoose.Schema({
    type:{
        type: String,
        required:true,
    },
    provider:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    GSTAttributes:{
        type:Object,
    },
    areaOfService:{
        type:Object,
    },
    cloudAttributes:{
        type:Object,
    }
})

module.exports = mongoose.model('Infrastructure',infraSchema)