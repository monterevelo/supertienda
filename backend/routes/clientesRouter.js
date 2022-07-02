const express = require('express');
const dbC = require('../src/db/crudClientes.js');
//const axios = require('axios').default;
const router = express.Router();

//Petición para obtener todos los clientes
router.get('/', function(req, res){
    dbC.getClientes(function(arrayClientes){
        res.json(arrayClientes);
    });
});

//Petición para obtener un cliente en particular mediante su índice de posición en la BD
router.get('/', function(req, res){
    dbC.getClientes(function(arrayClientes){
        res.json(arrayClientes[0]);
    });
});

//Petición para obtener un cliente en particular mediante su id
router.get('/:id', function(req, res){  
    const cid = req.params.id;
    dbC.getCliente(cid, function(refDoc){
        res.json(refDoc);
    });
});

//Petición para crear un cliente
router.post('/', function(req, res){ 
    const cliente = req.body;
    console.log(req.params);
    dbC.addCliente(cliente, function(status){
        if(status === "Success"){
            res.status(201).json(status);
        }else{
            res.status(503).json(status);
        }
    });
});


//Petición para crear un cliente con id
router.post("/:id", function (req, res) {
    const cid = req.params.id;
    const cliente = req.body;
    cliente.id = cid;
    dbC.addClienteWithID(cid, cliente, function (status) {
      res.json(status);
    });
  });


//Petición para actualizar un cliente, sobre-escribiendo en la BD
router.put('/:id', function(req, res){ 
    const cliente = req.body;
    const cid = req.params.id;
    dbC.updateClienteTotally(cid, cliente, function(status){
        res.json(status);
    });
});

//Petición para actualizar un cliente, sin sobre-escribir en la BD
router.patch('/:id', function(req, res){ 
    const cliente = req.body;
    const cid = req.params.id;
    dbC.updateClientePartially(cid, cliente, function(status){
        res.json(status);
    });
});

//Petición para eliminar un cliente de la BD
router.delete('/:id', function(req, res){ 
    const cid = req.params.id;
    dbC.deleteCliente(cid, function(status){
        res.json(status);
    });
});

//Petición para buscar un cliente en la BD filtrando datos - Traer un cliente por ubicación
router.get('/search/:ciudad', function (req, res) { 
    const cciudad = req.params.ciudad;
    dbC.searchCliente(cciudad, function(refDoc){
        res.json(refDoc);
    });
});


//************************


/* 
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
 */

//******************** */

module.exports = router;