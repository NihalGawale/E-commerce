const Product = require('../models/productModel')


const createProduct = async(req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    }) 
}

const getAllProducts = async(req,res) => {
    const allProducts = await Product.find();

    res.status(200).json({
        success:true,
        allProducts
    });
}

const updateProduct = async(req,res) => {
    if(req.params.id){
        console.log(req.params.id);
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(500).json({
                message : "Product not found"
            })
        }else{
            const response = await Product.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidators:true,
                useFindandModify:false
            })

            if(response) return res.status(200).json({success:true, response})
        }
    }
} 

const deleteSpecificProduct = async(req,res) => {
    if(req.body._id){
        const response = await Product.findByIdAndDelete(req.body._id);
       if(response){
        res.status(200).json({
            sudcesss:true,
            response
        })
       }
    }
}



module.exports = {getAllProducts,createProduct,deleteSpecificProduct,updateProduct};