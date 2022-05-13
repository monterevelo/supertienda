const express = require('express');
const dbV = require('../src/db/crudVentas.js');
const axios = require('axios').default;
const router = express.Router();


//Petición para obtener todas las ventas
router.get('/', (req, res)=>{
    dbV.getVentas(function(arrayVentas){
        var arreglo = arrayVentas;
        res.send(arreglo);
    })
})

//Petición para obtener una venta en particular mediante su índice de posición en la BD
router.get('/', (req, res)=>{
    dbV.getVentas(function(arrayVentas){
        var arreglo = arrayVentas;
        res.send(arreglo[0]);
    })
})

//Petición para obtener una venta en particular mediante su id
router.get('/:id', (req, res)=>{  
    const vid = req.params.id;
    dbV.getVenta(vid, function(doc){
        res.send(doc);
    })
})

//Petición para crear una venta
router.post('/', (req, res)=>{ 
    const venta = req.body;
    dbV.addVenta(venta, function(response){
        res.send(response);
    })
})

//Petición para actualizar una venta, sobre-escribiendo en la BD
router.put('/:id', (req, res)=>{ 
    const venta= req.body;
    const vid = req.params.id;
    dbV.UpdateVentaTotally(vid, venta, function(response){
        res.send(response);
    })
})

//Petición para actualizar una venta, sin sobre-escribir en la BD
router.patch('/:id', (req, res)=>{ 
    const venta = req.body;
    const vid = req.params.id;
    dbV.UpdateVentaPartial(vid, venta, function(response){
        res.send(response);
    })
})

//Petición para eliminar una venta de la BD
router.delete('/:id', (req, res)=>{ 
    const vid = req.params.id;
    dbV.deleteVenta(vid, function(response){
        res.send(response);
    })
})

module.exports = router;