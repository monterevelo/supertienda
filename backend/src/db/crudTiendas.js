const db = require('./firebase.js');

// Obtener todos las tiendas
function getTiendas(callback){
    return db.collection('tiendas').get()
        .then((refDoc)=>{
            var arrayTiendas = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayTiendas.push(doc.data());
            })
            callback(arrayTiendas);
        })
      .catch(err => {
          //console.error(`Error al obtener las tiendas`,err);
          callback("Error al obtener las tiendas",err)
      })
  }

// Obtener una sola tienda
function getTienda(tid, callback){
    return db.collection('tiendas').doc(tid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Información de tienda no enconrtada')
            }
        })
        .catch(err => {
            //console.error(`Error al obtener la tienda`,err);
            callback("Error al obtener la tienda",err)
        })
  }


// Agregar una tienda
function addTienda(tienda, callback){
    return db.collection('tiendas').add(tienda)
        .then(()=>{
            callback('Tienda creada exitósamente')
        })
        .catch(err => {
            callback("Error al crear la tienda",err)
        })
  }

// Actualizar una tienda, sobre-escribiendo en la BD
function UpdateTiendaTotally(tid, tienda, callback){
    return db.collection('tiendas').doc(tid).set(tienda)
        .then(()=>{
            callback('Tienda actualizada exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar la tienda",err)
        })
  }  


// Actualizar una tienda, sin sobre-escribir en la BD
function UpdateTiendaPartial(tid, tienda, callback){
    return db.collection('tiendas').doc(tid).update(tienda)
        .then(()=>{
            callback('Tienda actualizada exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar la tienda",err)
        })
  }  


// Eliminar una tienda de la BD
function deleteTienda(tid, callback){
    return db.collection('tiendas').doc(tid).delete()
        .then(()=>{
            callback('Tienda eliminada exitósamente')
        })
        .catch(err => {
            callback("Error al eliminar la tienda",err)
        })
  }  


  module.exports = {
      getTiendas,
      getTienda,
      addTienda,
      UpdateTiendaTotally,
      UpdateTiendaPartial,
      deleteTienda
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
