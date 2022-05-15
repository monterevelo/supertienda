const { raw } = require('express');
const express = require('express');
const router = express.Router();
var db = require ('./mockDBUsuarios.json');

//Petición para obtener un usuario en particular mediante su id
router.get('/', (req, res)=>{
    res.send(db);
})

//Petición para obtener un usuario en particular mediante su id
router.get('/:id', (req, res)=>{
    const uid = req.params.id;
    var usuario = db.filter(function(obj){
        return obj.id === uid;
    })
    res.send(usuario[0]);
})

//Petición para crear un usuario
router.post('/', (req, res)=>{
    const usuario = req.body;
    // usuario.id = String(db.length+1);
    usuario.id = String(Number(db[db.length-1].id)+1);
    db.push(usuario);
    res.send('Usuario creado exitósamente');
})

//Petición para actualizar un usuario, sobre-escribiendo en la BD
router.put('/:id', (req, res)=>{ 
    const uid = req.params.id;
    const usuario = req.body;
    usuario.id = uid;
    for(let i=0; i<db.length; i++){
        if(db[i].id === uid){
            db[i] = usuario;
            break;
        }
    }
    res.send('Usuario actualizado exitósamente');
})

//Petición para actualizar un usuario, sin sobre-escribir en la BD
router.patch('/:id', (req, res)=>{ 
    const uid = req.params.id;
    const usuario = req.body;
    usuario.id = uid;
    
    //Buscar la posición del elemento dentro del objeto según el id ingresado en la ruta
    var end=0;
    for(var i in db){
        for (var j in db[i]){
            if (j=="id" & db[i][j]==uid){
                var pos = i;
                end = 1;
            }
            if (end == 1){
                break;
            }
        }
        if (end == 1){
            break;
        }
    }

    //Basados en la posición (pos) encontrada anteriormente
    //asignamos los nuevos valores solo a las claves ingresadas para actualizar el usuario
    for (var clave in usuario){
        db[pos][clave]= usuario[clave];
    }
    res.send(db[pos]);
})


//Petición para eliminar un usuario de la BD
router.delete('/:id', (req, res)=>{ 
    var uid = req.params.id;
    var arreglo = [];
    var cont = 1;
    for(let i=0; i<db.length; i++){
        var element = db[i];
        if(element.id != uid){
            element.id = String(cont);
            cont++;
            arreglo.push(element);
        }
    }
    db=arreglo;
    res.send('Usuario eliminado exitósamente');
})

// //Petición para buscar un usuario en la BD filtrando datos (por ciudad)
router.get('/search1/:ciudad', (req, res)=>{ 
    const ciudad = req.params.ciudad;
    var usuarios = db.filter(function(obj){
        return obj.ciudad == ciudad;
    })
    res.send(usuarios);  
})

//Petición para buscar un usuario en la BD filtrando datos (por pais)
router.get('/search2/:pais', (req, res)=>{ 
    const pais = req.params.pais;
    var usuarios = db.filter(function(obj){
        return obj.pais == pais;
    })
    res.send(usuarios);  
})



module.exports = router;