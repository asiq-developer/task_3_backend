const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userId:{type:String , required:true , 
        index: true
    }, 
    productname:{type:String , required:true},
    Price:{type:String , required:true}

    

})



module.exports = mongoose.model('Orders', OrderSchema)
