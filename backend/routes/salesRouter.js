const express = require('express');
const dbS = require('../src/db/crudSales.js');
const axios = require('axios').default;
const router = express.Router();


//Request to get all sales
router.get('/', (req, res)=>{
    dbS.getSales(function(arraySales){
        var array = arraySales;
        res.send(array);
    })
})

//Request to obtain a particular sale through its position index in the DB
router.get('/', (req, res)=>{
    dbS.getSales(function(arraySales){
        var array = arraySales;
        res.send(array[0]);
    })
})

//Request to obtain a particular sale through its id
router.get('/:id', (req, res)=>{  
    const sid = req.params.id;
    dbS.getSale(sid, function(doc){
        res.send(doc);
    })
})

//Request to create a sale
router.post('/', (req, res)=>{ 
    const sale = req.body;
    dbS.addSale(sale, function(response){
        res.send(response);
    })
})

//Request to update a sale, overwriting in the DB
router.put('/:id', (req, res)=>{ 
    const sale= req.body;
    const sid = req.params.id;
    dbS.updateSaleTotally(sid, sale, function(response){
        res.send(response);
    })
})

//Request to update a sale, without overwriting the DB
router.patch('/:id', (req, res)=>{ 
    const sale = req.body;
    const sid = req.params.id;
    dbS.updateSalePartially(sid, sale, function(response){
        res.send(response);
    })
})

//Request to remove a sale from the DB
router.delete('/:id', (req, res)=>{ 
    const sid = req.params.id;
    dbS.deleteSale(sid, function(response){
        res.send(response);
    })
})

module.exports = router;