const express = require('express');
const dbG = require('../src/db/crudCategories.js');
const axios = require('axios').default;
const router = express.Router();

//Request to get all categories
router.get('/', (req, res)=>{
    dbG.getCategories(function(arrayCategories){
        var array = arrayCategories;
        res.send(array);
    })
})

//Request to obtain a particular category through its position index in the DB
router.get('/', (req, res)=>{
    dbG.getCategories(function(arrayCategories){
        var array = arrayCategories;
        res.send(array[0]);
    })
})

//Request to obtain a particular category by its id
router.get('/:id', (req, res)=>{  
    const gid = req.params.id;
    dbG.getCategory(gid, function(doc){
        res.send(doc);
    })
})

//Request to create a category
router.post('/', (req, res)=>{ 
    const category = req.body;
    dbG.addCategory(category, function(response){
        res.send(response);
    })
})

//Request to update a category, overwriting in the DB
router.put('/:id', (req, res)=>{ 
    const category= req.body;
    const gid = req.params.id;
    dbG.updateCategoryTotally(gid, category, function(response){
        res.send(response);
    })
})

//Request to update a category, without overwriting the DB
router.patch('/:id', (req, res)=>{ 
    const category = req.body;
    const gid = req.params.id;
    dbG.updateCategoryPartially(gid, category, function(response){
        res.send(response);
    })
})

//Request to remove a category from the DB
router.delete('/:id', (req, res)=>{ 
    const gid = req.params.id;
    dbG.deleteCategory(gid, function(response){
        res.send(response);
    })
})

module.exports = router;