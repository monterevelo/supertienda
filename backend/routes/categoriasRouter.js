const express = require('express');
const dbG = require('../src/db/crudCategorias.js');
const axios = require('axios').default;
const router = express.Router();

//Petición para obtener todas las catgorías
router.get('/', (req, res)=>{
    dbG.getCategorias(function(arrayCategorias){
        var arreglo = arrayCategorias;
        res.send(arreglo);
    })
})

//Petición para obtener una categoría en particular mediante su índice de posición en la BD
router.get('/', (req, res)=>{
    dbG.getCategorias(function(arrayCategorias){
        var arreglo = arrayCategorias;
        res.send(arreglo[0]);
    })
})

//Petición para obtener una categoria en particular mediante su id
router.get('/:id', (req, res)=>{  
    const gid = req.params.id;
    dbG.getCategoria(gid, function(doc){
        res.send(doc);
    })
})

//Petición para crear una categoria
router.post('/', (req, res)=>{ 
    const categoria = req.body;
    dbG.addCategoria(categoria, function(response){
        res.send(response);
    })
})

//Petición para actualizar una categoria, sobre-escribiendo en la BD
router.put('/:id', (req, res)=>{ 
    const categoria= req.body;
    const gid = req.params.id;
    dbG.UpdateCategoriaTotally(gid, categoria, function(response){
        res.send(response);
    })
})

//Petición para actualizar una categoría, sin sobre-escribir en la BD
router.patch('/:id', (req, res)=>{ 
    const categoria = req.body;
    const gid = req.params.id;
    dbG.UpdateCategoriaPartial(gid, categoria, function(response){
        res.send(response);
    })
})

//Petición para eliminar una categoria de la BD
router.delete('/:id', (req, res)=>{ 
    const gid = req.params.id;
    dbG.deleteCategoria(gid, function(response){
        res.send(response);
    })
})

module.exports = router;