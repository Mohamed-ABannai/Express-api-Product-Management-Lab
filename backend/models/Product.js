const mongoose =require('mongoose')


const productsSchema = new mongoose.Schema({

title:{
    type:String,
    required:true,
    trim:true
},
description:{
    type:String
},
category:{
type:String,
required:true,
enum: ['electronics', "food", "clothing", 'furniture', 'other']
},
price:{
type:Number,
min: 0.1,
required:true
},
quantity:{
    type:Number,
    min:0
}

},{timestamps:true})


const Product=mongoose.model('Product',productsSchema)

module.exports=Product
