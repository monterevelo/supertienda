const express = require('express');
const dbT = require('../src/db/crudStores.js');
const axios = require('axios').default;
const router = express.Router();

//Request to get all stores
router.get('/', (req, res)=>{
    dbT.getStores(function(arrayStores){
        var array = arrayStores;
        res.send(array);
    })
})

//Request to obtain a particular store by its position index in the DB
router.get('/', (req, res)=>{
    dbT.getStores(function(arrayStores){
        var array = arrayStores;
        res.send(array[0]);
    })
})

//Request to get a particular store by its id
router.get('/:id', (req, res)=>{  
    const tid = req.params.id;
    dbT.getStore(tid, function(doc){
        res.send(doc);
    })
})

//Request to create a store
router.post('/', (req, res)=>{ 
    const store = req.body;
    dbT.addStore(store, function(response){
        res.send(response);
    })
})

//Request to update a store, overwriting the BD
router.put('/:id', (req, res)=>{ 
    const store= req.body;
    const tid = req.params.id;
    dbT.updateStoreTotally(tid, store, function(response){
        res.send(response);
    })
})

//Request to update a store, without overwriting the DB
router.patch('/:id', (req, res)=>{ 
    const store = req.body;
    const tid = req.params.id;
    dbT.updateStorePartially(tid, store, function(response){
        res.send(response);
    })
})

//Request to remove a category from the DB
router.delete('/:id', (req, res)=>{ 
    const tid = req.params.id;
    dbT.deleteStore(tid, function(response){
        res.send(response);
    })
})

module.exports = router;