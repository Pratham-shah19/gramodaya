const mongoose = require('mongoose')

const MandiSchema = new mongoose.Schema({
    userID:{
        type:String
    },
    marketID:{
    type:String,
    required:[true,'please provide'],
    },
    marketName:{
        type:String,
        required:[true,'please provide'],
    },
    cmdtyID:{
        type:String,
        required:[true,'please provide'],
    },
    marketType:{
        type:String
    },
    cmdtyName:{
        type:String,
        required:[true,'please provide'],
    },
    priceUnit:{
        type:String,
        default:"Kg",
        required:[true,'please provide'],
    },
    convFctr:{
        type:Number
    },
    price:{
        type:Number,
        required:[true,'please provide'],
    }
},
)

module.exports = mongoose.model('mandi',MandiSchema)