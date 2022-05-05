const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./supertienda-d8494-c9dbc9f76c21.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

var identidad = {
  cedula:"27888777",
  nombres: "Claudia Maria",
  apellidos:"Ramirez Muñoz",
  edad:50
}

db.collection("supertienda").add({
  identidad:[identidad],
  celular:"3109992345",
  direccion:"Calle 23 # 23-23",
  email:"claudita@ghmail.com",
  avatar:"123435.jpg"
})
.then((doc)=>{
  console.log(`Cliente registrado con el ID ${doc.id}`);
})
.catch((error)=>{
  cponsole.log("Error al registrar el cliente")
});