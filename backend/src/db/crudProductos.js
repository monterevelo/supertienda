const db = require('./firebase.js');

// Obtener todos los productos
function getProductos(callback){
    return db.collection('productos').get()
        .then((refDoc)=>{
            var arrayProductos = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayProductos.push(doc.data());
            })
            callback(arrayProductos);
        })
      .catch(err => {
          //console.error(`Error al obtener los productos`,err);
          callback("Error al obtener los productos",err)
      })
  }

// Obtener un solo producto
function getProducto(pid, callback){
    return db.collection('productos').doc(pid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Información de producto no enconrtada')
            }
        })
        .catch(err => {
            //console.error(`Error al obtener el producto`,err);
            callback("Error al obtener el producto",err)
        })
  }


// Agregar un producto
function addProducto(producto, callback){
    return db.collection('productos').add(producto)
        .then(()=>{
            callback('Producto creado exitósamente')
        })
        .catch(err => {
            callback("Error al crear el producto",err)
        })
  }

// Actualizar un producto, sobre-escribiendo en la BD
function UpdateProductoTotally(pid, producto, callback){
    return db.collection('productos').doc(pid).set(producto)
        .then(()=>{
            callback('Producto actualizado exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar el producto",err)
        })
  }  


// Actualizar un producto, sin sobre-escribir en la BD
function UpdateProductoPartial(pid, producto, callback){
    return db.collection('productos').doc(pid).update(producto)
        .then(()=>{
            callback('Producto actualizado exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar el producto",err)
        })
  }  


// Eliminar un producto de la BD
function deleteProducto(pid, callback){
    return db.collection('productos').doc(pid).delete()
        .then(()=>{
            callback('Producto eliminado exitósamente')
        })
        .catch(err => {
            callback("Error al eliminar el producto",err)
        })
  }  


  module.exports = {
      getProductos,
      getProducto,
      addProducto,
      UpdateProductoTotally,
      UpdateProductoPartial,
      deleteProducto
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
