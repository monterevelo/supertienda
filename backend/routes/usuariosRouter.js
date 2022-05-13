const express = require('express');
const dbU = require('../src/db/crudUsuarios.js');
const axios = require('axios').default;
const router = express.Router();

//Petición para obtener un usuario en particular mediante su id
router.get('/:id', (req, res)=>{  
    const uid = req.params.id;
    dbU.getUsuario(uid, function(doc){
        res.send(doc);
    })
})

//Petición para crear un usuario
router.post('/', (req, res)=>{ 
    const usuario = req.body;
    const country = usuario.pais;
    axios.get('https://restcountries.com/v3.1/name/'+country)
        .then(function (response) {
            // handle success
            usuario.languages = response.data[0].languages;
        })
        .catch(function (error) {
            res.status(400).send(error);
        })
        .then(function () {
            dbU.addUsuario(usuario, function(response){
                if(response == "Usuario creado exitósamente"){
                    res.status(201).send(response);
                }else{
                    res.status(400).send(response);
                }
            })
        });
})

//Petición para actualizar un usuario, sobre-escribiendo en la BD
router.put('/:id', (req, res)=>{ 
    const usuario = req.body;
    const uid = req.params.id;
    dbU.UpdateUsuarioTotally(uid, usuario, function(response){
        res.send(response);
    })
})

//Petición para eliminar un usuario de la BD
router.delete('/:id', (req, res)=>{ 
    const uid = req.params.id;
    dbU.deleteUsuario(uid, function(response){
        res.send(response);
    })
})


//Petición para buscar un usuario en la BD filtrando datos
router.get('search/:ciudad', (req, res)=>{ 
    const uciudad = req.params.ciudad;
    dbU.searchUsuario(uciudad, function(arrayUsuarios){
        res.send(arrayUsuarios);
    })
})

module.exports = router;