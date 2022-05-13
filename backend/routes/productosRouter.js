const express = require('express');
const dbP = require('../src/db/crudProductos.js');
const axios = require('axios').default;
const router = express.Router();


//Petición para obtener todos los productos
router.get('/', (req, res)=>{
    dbP.getProductos(function(arrayProductos){
        var arreglo = arrayProductos;
        res.send(arreglo);
    })
})

//Petición para obtener un producto en particular mediante su índice de posición en la BD
router.get('/', (req, res)=>{
    dbP.getProductos(function(arrayProductos){
        var arreglo = arrayProductos;
        res.send(arreglo[0]);
    })
})

//Petición para obtener un producto en particular mediante su id
router.get('/:id', (req, res)=>{  
    const pid = req.params.id;
    dbP.getProducto(pid, function(doc){
        res.send(doc);
    })
})

//Petición para crear un producto
router.post('/', (req, res)=>{ 
    const producto = req.body;
    dbP.addProducto(producto, function(response){
        res.send(response);
    })
})

//Petición para actualizar un ´producto, sobre-escribiendo en la BD
router.put('/:id', (req, res)=>{ 
    const producto = req.body;
    const pid = req.params.id;
    dbP.UpdateProductoTotally(pid, producto, function(response){
        res.send(response);
    })
})

//Petición para actualizar un producto, sin sobre-escribir en la BD
router.patch('/:id', (req, res)=>{ 
    const producto = req.body;
    const pid = req.params.id;
    dbP.UpdateProductoPartial(pid, producto, function(response){
        res.send(response);
    })
})

//Petición para eliminar un cliente de la BD
router.delete('/:id', (req, res)=>{ 
    const pid = req.params.id;
    dbP.deleteProducto(pid, function(response){
        res.send(response);
    })
})

module.exports = router;