const { Product } = require('../Models/Product');



const addProduct = async (req,res) => {
    let products = await Product.find({})
    let id;
    if(products.length>0){
        last_Products_Array = products.slice(-1)
        last_products = last_Products_Array[0]
        id= last_products.id+1
    }
    else{
        id=1;
    }
    const body = req.body;
        const product = await Product.create({
            id: id,
            name: body.name,
            image: body.image,
            category: body.category,
            new_price: body.new_price,
            old_price: body.old_price,
        });
        
        res.json({
            success: true,
            product: product
        });
};
const deleteProduct = async (req,res) => {
    await Product.findOneAndDelete({id:req.body.id})
        
        res.json({
            success: true,
            // name:req.body.name
        });
};
const getAllProduct = async (req,res) => {
    const product = await Product.find({})
        
        res.json({
            // success: true,
            product
        });
};
const getnewCollection = async (req,res) => {
    const product = await Product.find({})
    let newcollection = product.slice(1).slice(-8)
        res.json({
            newcollection
        });
};
const popularInWomen = async (req,res) => {
    const product = await Product.find({category:"womens"})
    let popularWomen = product.slice(0,4)
        res.json({
            popularWomen
        });
};

module.exports = {addProduct,deleteProduct,getAllProduct,getnewCollection,popularInWomen}