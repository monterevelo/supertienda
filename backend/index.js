const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));  //Esto hace que la app pueda publicar cosas estáticas
app.use(express.json());  //Esto se hace para que la app pueda identificar objetos JSON en las actualizaciones (PUT,PATCH)

const dbC = require('./src/db/crudClientes.js');
const dbU = require('./src/db/crudUsuarios.js');
const dbP = require('./src/db/crudProductos.js');

app.get('/', function (req, res) {
    res.send('Servidor de Supertienda con Express')
});


// ********************************** Clientes **********************************   

//Petición para obtener todos los clientes
app.get('/clientes', (req, res)=>{
    dbC.getClientes(function(arrayClientes){
        var arreglo = arrayClientes;
        res.send(arreglo);
    })
})

//Petición para obtener un cliente en particular mediante su índice de posición en la BD
app.get('/clientes', (req, res)=>{
    dbC.getClientes(function(arrayClientes){
        var arreglo = arrayClientes;
        res.send(arreglo[0]);
    })
})

//Petición para obtener un cliente en particular mediante su id
app.get('/clientes/:id', (req, res)=>{  
    const cid = req.params.id;
    dbC.getCliente(cid, function(doc){
        res.send(doc);
    })
})

//Petición para crear un cliente
app.post('/clientes', (req, res)=>{ 
    const cliente = req.body;
    dbC.addCliente(cliente, function(response){
        res.send(response);
    })
})

//Petición para actualizar un cliente, sobre-escribiendo en la BD
app.put('/clientes/:id', (req, res)=>{ 
    const cliente = req.body;
    const cid = req.params.id;
    dbC.UpdateClienteTotally(cid, cliente, function(response){
        res.send(response);
    })
})

//Petición para actualizar un cliente, sin sobre-escribir en la BD
app.patch('/clientes/:id', (req, res)=>{ 
    const cliente = req.body;
    const cid = req.params.id;
    dbC.UpdateClientePartial(cid, cliente, function(response){
        res.send(response);
    })
})

//Petición para eliminar un cliente de la BD
app.delete('/clientes/:id', (req, res)=>{ 
    const cid = req.params.id;
    dbC.deleteCliente(cid, function(response){
        res.send(response);
    })
})

// ********************************** Fin Clientes **********************************   



// ************************************ Usuarios ************************************   

//Petición para obtener un usuario en particular mediante su id
app.get('/usuarios/:id', (req, res)=>{  
    const uid = req.params.id;
    dbU.getUsuario(uid, function(doc){
        res.send(doc);
    })
})

//Petición para crear un usuario
app.post('/usuarios', (req, res)=>{ 
    const usuario = req.body;
    dbU.addUsuario(usuario, function(response){
        res.send(response);
    })
})

//Petición para actualizar un usuario, sobre-escribiendo en la BD
app.put('/usuarios/:id', (req, res)=>{ 
    const usuario = req.body;
    const uid = req.params.id;
    dbU.UpdateUsuarioTotally(uid, usuario, function(response){
        res.send(response);
    })
})

//Petición para eliminar un usuario de la BD
app.delete('/usuarios/:id', (req, res)=>{ 
    const uid = req.params.id;
    dbU.deleteUsuario(uid, function(response){
        res.send(response);
    })
})

// ********************************** Fin Usuarios **********************************   



// ************************************ Productos ***********************************   

//Petición para obtener todos los productos
app.get('/productos', (req, res)=>{
    dbP.getProductos(function(arrayProductos){
        var arreglo = arrayProductos;
        res.send(arreglo);
    })
})

//Petición para obtener un producto en particular mediante su índice de posición en la BD
app.get('/productos', (req, res)=>{
    dbP.getProductos(function(arrayProductos){
        var arreglo = arrayProductos;
        res.send(arreglo[0]);
    })
})

//Petición para obtener un producto en particular mediante su id
app.get('/productos/:id', (req, res)=>{  
    const pid = req.params.id;
    dbP.getProducto(pid, function(doc){
        res.send(doc);
    })
})

//Petición para crear un producto
app.post('/productos', (req, res)=>{ 
    const producto = req.body;
    dbP.addProducto(producto, function(response){
        res.send(response);
    })
})

//Petición para actualizar un ´producto, sobre-escribiendo en la BD
app.put('/productos/:id', (req, res)=>{ 
    const producto = req.body;
    const pid = req.params.id;
    dbP.UpdateProductoTotally(pid, producto, function(response){
        res.send(response);
    })
})

//Petición para actualizar un producto, sin sobre-escribir en la BD
app.patch('/productos/:id', (req, res)=>{ 
    const producto = req.body;
    const pid = req.params.id;
    dbP.UpdateProductoPartial(pid, producto, function(response){
        res.send(response);
    })
})

//Petición para eliminar un cliente de la BD
app.delete('/productos/:id', (req, res)=>{ 
    const pid = req.params.id;
    dbP.deleteProducto(pid, function(response){
        res.send(response);
    })
})

// ********************************** Fin Productos *********************************   


app.listen(port, ()=>{
    console.log('My port is listering '+port);
})
