const express = require('express');
const dbT = require('../src/db/crudTiendas.js');
const axios = require('axios').default;
const router = express.Router();

//Petición para obtener todas las tiendas
router.get('/', (req, res)=>{
    dbT.getTiendas(function(arrayTiendas){
        var arreglo = arrayTiendas;
        res.send(arreglo);
    })
})

//Petición para obtener una tienda en particular mediante su índice de posición en la BD
router.get('/', (req, res)=>{
    dbT.getTiendas(function(arrayTiendas){
        var arreglo = arrayTiendas;
        res.send(arreglo[0]);
    })
})

//Petición para obtener una tienda en particular mediante su id
router.get('/:id', (req, res)=>{  
    const tid = req.params.id;
    dbT.getTienda(tid, function(doc){
        res.send(doc);
    })
})

//Petición para crear una tienda
router.post('/', (req, res)=>{ 
    const tienda = req.body;
    dbT.addTienda(tienda, function(response){
        res.send(response);
    })
})

//Petición para actualizar una tienda, sobre-escribiendo en la BD
router.put('/:id', (req, res)=>{ 
    const tienda= req.body;
    const tid = req.params.id;
    dbT.UpdateTiendaTotally(tid, tienda, function(response){
        res.send(response);
    })
})

//Petición para actualizar una tienda, sin sobre-escribir en la BD
router.patch('/:id', (req, res)=>{ 
    const tienda = req.body;
    const tid = req.params.id;
    dbT.UpdateTiendaPartial(tid, tienda, function(response){
        res.send(response);
    })
})

//Petición para eliminar una categoria de la BD
router.delete('/:id', (req, res)=>{ 
    const tid = req.params.id;
    dbT.deleteTienda(tid, function(response){
        res.send(response);
    })
})

module.exports = router;