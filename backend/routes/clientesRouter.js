const express = require('express');
const dbC = require('../src/db/crudClientes.js');
const axios = require('axios').default;
const router = express.Router();

//Petición para obtener todos los clientes
router.get('/', (req, res)=>{
    dbC.getClientes(function(arrayClientes){
        var arreglo = arrayClientes;
        res.send(arreglo);
    })
})

//Petición para obtener un cliente en particular mediante su índice de posición en la BD
router.get('/', (req, res)=>{
    dbC.getClientes(function(arrayClientes){
        var arreglo = arrayClientes;
        res.send(arreglo[0]);
    })
})

//Petición para obtener un cliente en particular mediante su id
router.get('/:id', (req, res)=>{  
    const cid = req.params.id;
    dbC.getCliente(cid, function(doc){
        res.send(doc);
    })
})

//Petición para crear un cliente
router.post('/', (req, res)=>{ 
    const cliente = req.body;
    dbC.addCliente(cliente, function(response){
        res.send(response);
    })
})

//Petición para actualizar un cliente, sobre-escribiendo en la BD
router.put('/:id', (req, res)=>{ 
    const cliente = req.body;
    const cid = req.params.id;
    dbC.UpdateClienteTotally(cid, cliente, function(response){
        res.send(response);
    })
})

//Petición para actualizar un cliente, sin sobre-escribir en la BD
router.patch('/:id', (req, res)=>{ 
    const cliente = req.body;
    const cid = req.params.id;
    dbC.UpdateClientePartial(cid, cliente, function(response){
        res.send(response);
    })
})

//Petición para eliminar un cliente de la BD
router.delete('/:id', (req, res)=>{ 
    const cid = req.params.id;
    dbC.deleteCliente(cid, function(response){
        res.send(response);
    })
})

//Petición para buscar un cliente en la BD filtrando datos - Traer un cliente por ubicación
router.get('/search/:ciudad', function (req, res) { 
    const cciudad = req.params.ciudad;
    dbC.searchCliente(cciudad, function(refDoc){
        res.json(refDoc);
    });
});

module.exports = router;