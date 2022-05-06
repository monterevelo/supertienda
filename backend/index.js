const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));  //Esto hace que la app pueda publicar cosas estáticas
app.use(express.json());

const dbC = require('./src/db/crudSupertienda.js');

app.get('/', function (req, res) {
    res.send('Servidor de Supertienda con Express')
});

// //Peticón para obtener todos los clientes
// app.get('/get-clientes/', (req, res)=>{
//     dbC.getClientes(function(arrayClientes){
//         var arreglo = arrayClientes;
//         res.send(arreglo);
//     })
// })

// //Petición para obtener un cliente en particular mediante su índice de posición en la BD
// app.get('/get-clientes/', (req, res)=>{
//     dbC.getClientes(function(arrayClientes){
//         var arreglo = arrayClientes;
//         res.send(arreglo[0]);
//     })
// })

//Petición para obtener un cliente en particular mediante su id
app.get('/get-cliente/:id', (req, res)=>{   //Nos referimos solo a cliente (no clientes) por ser uno solo
    const cid = req.params.id;
    dbC.getCliente(cid, function(doc){
        res.send(doc);
    })
})

//Petición para crear un cliente
app.post('/add-cliente', (req, res)=>{ 
    const cliente = req.body;
    dbC.addCliente(cliente, function(response){
        res.send(response);
    })
})

//Petición para actualizar un cliente, sobre-escribiendo en la BD
app.put('/update-cliente-totally/:id', (req, res)=>{ 
    const cliente = req.body;
    const cid = req.params.id;
    dbC.UpdateClienteTotally(cid, cliente, function(response){
        res.send(response);
    })
})

//Petición para actualizar un cliente, sin sobre-escribir en la BD
app.patch('/update-cliente-partial/:id', (req, res)=>{ 
    const cliente = req.body;
    const cid = req.params.id;
    dbC.UpdateClientePartial(cid, cliente, function(response){
        res.send(response);
    })
})

//Petición para eliminar un cliente de la BD
app.delete('/delete-cliente/:id', (req, res)=>{ 
    const cid = req.params.id;
    dbC.deleteCliente(cid, function(response){
        res.send(response);
    })
})


app.listen(port, ()=>{
    console.log('My port is listering '+port);
})











// app.get('/nueva-ruta', (req, res)=>{
//     res.send('Esta es una nueva ruta en servidor de Express')
// })

// app.get('/get-clientes/:id', (req, res)=>{
//     const cid = req.params.id; 
//     res.send('Se consultó el cliente '+cid);
// })

// app.get('/get-cliente', (req, res)=>{
//     res.json({
//         nombre:"Germán Montenegro Revelo",
//         cedula:"89222555",
//         email:"gamr@gmail.com"
//     })
// })


  





















// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// const serviceAccount = require('./supertienda-d8494-c9dbc9f76c21.json');

// initializeApp({
//   credential: cert(serviceAccount)
// });

// const db = getFirestore();

// db.collection("clientes").add({
//     "cedula":"79223888",
//     "nombre":"Germán Chavez",
//     "celular":"3110092233",
//     "direccion":"Carrera 5 # 3-20",
//     "email":"cordoba@gmail.com",
//     "avatar":"cordoba.jpg"
// })
// .then((doc)=>{
//     console.log(`Documento registrado con el ID ${doc.id}`);
// })
// .catch((error)=>{
//     console.log("Error al registrar el documento")
// });



// // // Obtener todos los clientes
// // function getClientes(){
// //     return db.collection('clientes').get()
// //         .then((refDoc)=>{
// //             refDoc.forEach(doc=>{
// //                 console.log(doc.id,'=>', doc.date());
// //             })
// //         })
// //       .catch(err => {
// //         console.error(`Error al obtener los clientes`,err);
// //       })
// //   }

 
