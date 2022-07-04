const express = require('express');
const dbP = require('../src/db/crudProducts.js');
const axios = require('axios').default;
const router = express.Router();


//Request to get all products
router.get('/', (req, res)=>{
    dbP.getProducts(function(arrayProducts){
        var array = arrayProducts;
        res.send(array);
    })
})

//Request to obtain a particular product through its position index in the DB
router.get('/', (req, res)=>{
    dbP.getProducts(function(arrayProducts){
        var array = arrayProducts;
        res.send(array[0]);
    })
})

//Request to obtain a particular product through its id
router.get('/:id', (req, res)=>{  
    const pid = req.params.id;
    dbP.getProduct(pid, function(doc){
        res.send(doc);
    })
})

//Request to create a product
router.post('/', (req, res)=>{ 
    const product = req.body;
    dbP.addProduct(product, function(response){
        res.send(response);
    })
})

//Request to update a product, overwriting in the DB
router.put('/:id', (req, res)=>{ 
    const product = req.body;
    const pid = req.params.id;
    dbP.updateProductTotally(pid, product, function(response){
        res.send(response);
    })
})

//Request to update a product, without overwriting the DB
router.patch('/:id', (req, res)=>{ 
    const product = req.body;
    const pid = req.params.id;
    dbP.updateProductPartially(pid, product, function(response){
        res.send(response);
    })
})

//Request to remove a product from the database
router.delete('/:id', (req, res)=>{ 
    const pid = req.params.id;
    dbP.deleteProduct(pid, function(response){
        res.send(response);
    })
})

module.exports = router;