const db = require('./src/db/crudSupertienda.js');

db.getClientes();

























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

 
