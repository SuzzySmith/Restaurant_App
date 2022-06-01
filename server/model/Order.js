const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema ({
    client: {
        type: String,

    },
cost: {
        type: Number,
        
    },
    menu:
       {type:  mongoose.Schema.Types.ObjectId, ref : 'Menu'} ,
        
    
    order_date: {
        type: Date,
    },
   
    paid: {
        type: Boolean,
        
    },
    status: {
        type: Boolean,
        
    }

});

module.exports =  mongoose.model("order", orderSchema)

