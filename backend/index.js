const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));  //Esto hace que la app pueda publicar cosas estáticas
app.use(express.json());  //Esto se hace para que la app pueda identificar objetos JSON en las actualizaciones (PUT,PATCH)
const axios = require('axios').default; 

const dbC = require('./src/db/crudClientes.js');
const dbU = require('./src/db/crudUsuarios.js');
const dbP = require('./src/db/crudProductos.js');
const dbG = require('./src/db/crudCategorias.js');
const dbT = require('./src/db/crudTiendas.js');
const dbV = require('./src/db/crudVentas.js');

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


//Petición para buscar un usuario en la BD filtrando datos
app.get('/usuarios/search/:ciudad', (req, res)=>{ 
    const uciudad = req.params.ciudad;
    dbU.searchUsuario(uciudad, function(arrayUsuarios){
        res.send(arrayUsuarios);
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


// *********************************** Categorías ***********************************   

//Petición para obtener todas las catgorías
app.get('/categorias', (req, res)=>{
    dbG.getCategorias(function(arrayCategorias){
        var arreglo = arrayCategorias;
        res.send(arreglo);
    })
})

//Petición para obtener una categoría en particular mediante su índice de posición en la BD
app.get('/categorias', (req, res)=>{
    dbG.getCategorias(function(arrayCategorias){
        var arreglo = arrayCategorias;
        res.send(arreglo[0]);
    })
})

//Petición para obtener una categoria en particular mediante su id
app.get('/categorias/:id', (req, res)=>{  
    const gid = req.params.id;
    dbG.getCategoria(gid, function(doc){
        res.send(doc);
    })
})

//Petición para crear una categoria
app.post('/categorias', (req, res)=>{ 
    const categoria = req.body;
    dbG.addCategoria(categoria, function(response){
        res.send(response);
    })
})

//Petición para actualizar una categoria, sobre-escribiendo en la BD
app.put('/categorias/:id', (req, res)=>{ 
    const categoria= req.body;
    const gid = req.params.id;
    dbG.UpdateCategoriaTotally(gid, categoria, function(response){
        res.send(response);
    })
})

//Petición para actualizar una categoría, sin sobre-escribir en la BD
app.patch('/categorias/:id', (req, res)=>{ 
    const categoria = req.body;
    const gid = req.params.id;
    dbG.UpdateCategoriaPartial(gid, categoria, function(response){
        res.send(response);
    })
})

//Petición para eliminar una categoria de la BD
app.delete('/categorias/:id', (req, res)=>{ 
    const gid = req.params.id;
    dbG.deleteCategoria(gid, function(response){
        res.send(response);
    })
})

// ********************************* Fin Categorías *********************************   


// ************************************* Ventas *************************************   

//Petición para obtener todas las ventas
app.get('/ventas', (req, res)=>{
    dbV.getVentas(function(arrayVentas){
        var arreglo = arrayVentas;
        res.send(arreglo);
    })
})

//Petición para obtener una venta en particular mediante su índice de posición en la BD
app.get('/ventas', (req, res)=>{
    dbV.getVentas(function(arrayVentas){
        var arreglo = arrayVentas;
        res.send(arreglo[0]);
    })
})

//Petición para obtener una venta en particular mediante su id
app.get('/ventas/:id', (req, res)=>{  
    const vid = req.params.id;
    dbV.getVenta(vid, function(doc){
        res.send(doc);
    })
})

//Petición para crear una venta
app.post('/ventas', (req, res)=>{ 
    const venta = req.body;
    dbV.addVenta(venta, function(response){
        res.send(response);
    })
})

//Petición para actualizar una venta, sobre-escribiendo en la BD
app.put('/ventas/:id', (req, res)=>{ 
    const venta= req.body;
    const vid = req.params.id;
    dbV.UpdateVentaTotally(vid, venta, function(response){
        res.send(response);
    })
})

//Petición para actualizar una venta, sin sobre-escribir en la BD
app.patch('/ventas/:id', (req, res)=>{ 
    const venta = req.body;
    const vid = req.params.id;
    dbV.UpdateVentaPartial(vid, venta, function(response){
        res.send(response);
    })
})

//Petición para eliminar una venta de la BD
app.delete('/ventas/:id', (req, res)=>{ 
    const vid = req.params.id;
    dbV.deleteVenta(vid, function(response){
        res.send(response);
    })
})

// *********************************** Fin Ventas ***********************************   


// ************************************* Tiendas ************************************   

//Petición para obtener todas las tiendas
app.get('/tiendas', (req, res)=>{
    dbT.getTiendas(function(arrayTiendas){
        var arreglo = arrayTiendas;
        res.send(arreglo);
    })
})

//Petición para obtener una tienda en particular mediante su índice de posición en la BD
app.get('/tiendas', (req, res)=>{
    dbT.getTiendas(function(arrayTiendas){
        var arreglo = arrayTiendas;
        res.send(arreglo[0]);
    })
})

//Petición para obtener una tienda en particular mediante su id
app.get('/tiendas/:id', (req, res)=>{  
    const tid = req.params.id;
    dbT.getTienda(tid, function(doc){
        res.send(doc);
    })
})

//Petición para crear una tienda
app.post('/tiendas', (req, res)=>{ 
    const tienda = req.body;
    dbT.addTienda(tienda, function(response){
        res.send(response);
    })
})

//Petición para actualizar una tienda, sobre-escribiendo en la BD
app.put('/tiendas/:id', (req, res)=>{ 
    const tienda= req.body;
    const tid = req.params.id;
    dbT.UpdateTiendaTotally(tid, tienda, function(response){
        res.send(response);
    })
})

//Petición para actualizar una tienda, sin sobre-escribir en la BD
app.patch('/tiendas/:id', (req, res)=>{ 
    const tienda = req.body;
    const tid = req.params.id;
    dbT.UpdateTiendaPartial(tid, tienda, function(response){
        res.send(response);
    })
})

//Petición para eliminar una categoria de la BD
app.delete('/tiendas/:id', (req, res)=>{ 
    const tid = req.params.id;
    dbT.deleteTienda(tid, function(response){
        res.send(response);
    })
})

// *********************************** Fin Tiendas **********************************   



app.listen(port, ()=>{
    console.log('My port is listering '+port);
})
