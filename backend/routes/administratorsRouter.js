const express = require('express');
const dbA = require('../src/db/crudAdministrators.js');
const axios = require('axios').default;
const router = express.Router();

//Request to obtain a particular administrator through his id
router.get('/:id', (req, res)=>{  
    const aid = req.params.id;
    dbA.getAdministrator(aid, function(doc){
        res.send(doc);
    })
})


//*******************

//Request to create an administrator
router.post('/', function(req, res){ 
    const administrator = req.body;
    console.log(req.params);
    dbA.addAdministrator(administrator, function(status){
        if(status === "Success"){
            res.status(201).json(status);
        }else{
            res.status(503).json(status);
        }
    });
});

//Request to create an administrator with id
router.post("/:id", function (req, res) {
    const aid = req.params.id;
    const administrator = req.body;
    administrator.id = aid;
    dbA.addAdministratorWithID(aid, administrator, function (status) {
      res.json(status);
    });
  });


//******************** */




//Request to create an administrator
/* router.post('/', (req, res)=>{ 
    const administrator = req.body;
    const country = administrator.country;
    axios.get('https://restcountries.com/v3.1/name/'+country)
        .then(function (response) {
            // handle success
            administrator.languages = response.data[0].languages;
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
        .then(function () {
            dbA.addAdministrator(administrator, function(response){
                if(response == "Administrator created successfully"){
                    res.status(201).send(response);
                }else{
                    res.status(400).send(response);
                }
            })
        });
}) */

//Request to update an administrator, overwriting in the DB
router.put('/:id', (req, res)=>{ 
    const administrator = req.body;
    const aid = req.params.id;
    dbA.updateAdministratorTotally(aid, administrator, function(response){
        res.send(response);
    })
})

//Request to remove an administrator from the database
router.delete('/:id', (req, res)=>{ 
    const aid = req.params.id;
    dbA.deleteAdministrator(aid, function(response){
        res.send(response);
    })
})


//Petición para buscar un usuario en la BD filtrando datos
router.get('search/:city', (req, res)=>{ 
    const acity = req.params.city;
    dbA.searchAdministrator(acity, function(arrayAdministrators){
        res.send(arrayAdministrators);
    })
})

module.exports = router;