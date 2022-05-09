const db = require('./firebase.js');

// Obtener todos las ventas
function getVentas(callback){
    return db.collection('ventas').get()
        .then((refDoc)=>{
            var arrayVentas = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayVentas.push(doc.data());
            })
            callback(arrayVentas);
        })
      .catch(err => {
          //console.error(`Error al obtener las ventas`,err);
          callback("Error al obtener las ventas",err)
      })
  }

// Obtener una sola venta
function getVenta(vid, callback){
    return db.collection('ventas').doc(vid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Información de venta no enconrtada')
            }
        })
        .catch(err => {
            //console.error(`Error al obtener la venta`,err);
            callback("Error al obtener la venta",err)
        })
  }


// Agregar una venta
function addVenta(venta, callback){
    return db.collection('ventas').add(venta)
        .then(()=>{
            callback('Venta creada exitósamente')
        })
        .catch(err => {
            callback("Error al crear la venta",err)
        })
  }

// Actualizar una venta, sobre-escribiendo en la BD
function UpdateVentaTotally(vid, venta, callback){
    return db.collection('ventas').doc(vid).set(venta)
        .then(()=>{
            callback('Venta actualizada exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar la venta",err)
        })
  }  


// Actualizar una venta, sin sobre-escribir en la BD
function UpdateVentaPartial(vid, venta, callback){
    return db.collection('ventas').doc(vid).update(venta)
        .then(()=>{
            callback('Venta actualizada exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar la venta",err)
        })
  }  


// Eliminar una venta de la BD
function deleteVenta(vid, callback){
    return db.collection('ventas').doc(vid).delete()
        .then(()=>{
            callback('Venta eliminada exitósamente')
        })
        .catch(err => {
            callback("Error al eliminar la venta",err)
        })
  }  


  module.exports = {
      getVentas,
      getVenta,
      addVenta,
      UpdateVentaTotally,
      UpdateVentaPartial,
      deleteVenta
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
