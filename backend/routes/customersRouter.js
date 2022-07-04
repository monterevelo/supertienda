const express = require('express');
const dbC = require('../src/db/crudCustomers.js');
const axios = require('axios').default;
const router = express.Router();

//Request to get all customers
router.get('/', function(req, res){
    dbC.getCustomers(function(arrayCustomers){
        res.json(arrayCustomers);
    });
});

//Request to obtain a particular customer through its position index in the DB
router.get('/', function(req, res){
    dbC.getCustomers(function(arrayCustomers){
        res.json(arrayCustomers[0]);
    });
});

//Request to obtain a particular customer through its id
router.get('/:id', function(req, res){  
    const cid = req.params.id;
    dbC.getCustomer(cid, function(refDoc){
        res.json(refDoc);
    });
});

//Request to create a customer
router.post('/', function(req, res){ 
    const customer = req.body;
    console.log(req.params);
    dbC.addCustomer(customer, function(status){
        if(status === "Success"){
            res.status(201).json(status);
        }else{
            res.status(503).json(status);
        }
    });
});

//Request to create a customer with id
router.post("/:id", function (req, res) {
    const cid = req.params.id;
    const customer = req.body;
    customer.id = cid;
    dbC.addCustomerWithID(cid, customer, function (status) {
      res.json(status);
    });
  });


//Request to update a customer, overwriting the DB
router.put('/:id', function(req, res){ 
    const customer = req.body;
    const cid = req.params.id;
    dbC.updateCustomerTotally(cid, customer, function(status){
        res.json(status);
    });
});

//Request to update a customer, without overwriting the DB
router.patch('/:id', function(req, res){ 
    const customer = req.body;
    const cid = req.params.id;
    dbC.updateCustomerPartially(cid, customer, function(status){
        res.json(status);
    });
});

//Request to remove a client from the DB
router.delete('/:id', function(req, res){ 
    const cid = req.params.id;
    dbC.deleteCustomer(cid, function(status){
        res.json(status);
    });
});

//Request to search for a customer in the DB filtering data - Bring a customer by location
router.get('/search/:city', function (req, res) { 
    const ccity = req.params.city;
    dbC.searchCustomer(ccity, function(refDoc){
        res.json(refDoc);
    });
});

module.exports = router;


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

