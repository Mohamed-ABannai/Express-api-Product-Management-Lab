const checkValidObjectId= require('../middleware/checkValidObjectID')
const Product = require('../models/Product')

const router=require('express').Router()

router.post('/',async(req,res)=>{

    const {title,description,category,price,quantity}=req.body
    try{

        const createProduct= await Product.create({title,description,category,price,quantity})
       
        res.status(201).json(createProduct)
    }
    catch(err){
        if(err.name ==='ValidationError'){

            res.status(400).json(err+'error in create')

        }
        console.log(err)

    }

})


router.get('/',async(req,res)=>{

    try{

        const allProducts= await Product.find()
        res.status(200).json(allProducts)

    }
    catch(err){


        console.log(err)
    }

})


router.get('/:id',checkValidObjectId,async(req,res)=>{

    try{

        const oneProduct= await Product.findById(req.params.id)
        res.status(200).json(oneProduct)

    }
    catch(err){


        console.log(err)
    }

})


router.put('/:id',async(req,res)=>{

    try{

        const updateProduct= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!updateProduct){
            return res.status(400).json('Product Id Not Valid')
        }
        res.status(200).json(updateProduct)

    }
    catch(err){


        console.log(err)
    }

})


router.delete('/:id',async(req,res)=>{

    try{

        const deleteProduct= await Product.findByIdAndDelete(req.params.id)
        if(!deleteProduct){
            return res.status(400).json('Product Id Not Valid')
        }
        res.status(200).json(deleteProduct)

    }
    catch(err){


        console.log(err)
    }

})




module.exports=router