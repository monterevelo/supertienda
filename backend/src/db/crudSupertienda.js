const db = require('./firebase.js');

// Obtener todos los clientes
function getClientes(callback){
    return db.collection('clientes').get()
        .then((refDoc)=>{
            var arrayClientes = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayClientes.push(doc.data());
            })
            callback(arrayClientes);
        })
      .catch(err => {
          //console.error(`Error al obtener los clientes`,err);
          callback("Error al obtener los clientes",err)
      })
  }

// Obtener un solo cliente
function getCliente(cid, callback){
    return db.collection('clientes').doc(cid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Información de cliente no enconrtada')
            }
        })
        .catch(err => {
            //console.error(`Error al obtener los clientes`,err);
            callback("Error al obtener el cliente",err)
        })
  }

  module.exports = {
      getClientes,
      getCliente
  }




//   // Obtener todos los clientes
// function getClientes(){
//     return db.collection('clientes').get()
//         .then((refDoc)=>{
//             refDoc.forEach(doc=>{
//                 console.log(doc.id,'=>', doc.data());
//             })
//         })
//       .catch(err => {
//         console.error(`Error al obtener los clientes`,err);
//       })
//   }
