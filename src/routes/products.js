

//-------------Importar

 const express = require('express')


 const router = express.Router()

 const axios = require('axios')

 //--------------------------ALL PRODUTCS


 router.get('/products',async (req,res) => {

 const productos = await axios.get('https://fakestoreapi.com/products').catch(console.error)

 res.json(productos.data)
             

 });

//--------------------------ONE PRODUCT

 router.get('/products/:id', async (req,res) => {

 const producto = await axios.get(`https://fakestoreapi.com/products/${req.params.id}`).catch(console.error)
 res.json(producto.data)
    


 });

 //------------------------- ALL CATEGORIES

 router.get('/products/:categories', async (req,res) => {

    const producto = await axios.get(`https://fakestoreapi.com/products/${req.params.categories}`).catch(console.error)
    res.json(producto.data)
       
   
 });


 //-------------------------------------ONE CATEGORY


//  router.get('/products/category/:category', async (req,res) => {

//     const producto = await axios.get(`https://fakestoreapi.com/products/${req.params.category}`).catch(console.error)
//     res.json(producto.data[0])
       
   
//  });


   





module.exports = router


    