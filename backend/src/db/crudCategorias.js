const db = require('./firebase.js');

// Obtener todos las categorias
function getCategorias(callback){
    return db.collection('categorias').get()
        .then((refDoc)=>{
            var arrayCategorias = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayCategorias.push(doc.data());
            })
            callback(arrayCategorias);
        })
      .catch(err => {
          //console.error(`Error al obtener las categorías`,err);
          callback("Error al obtener las categorías",err)
      })
  }

// Obtener una sola categoría
function getCategoria(gid, callback){
    return db.collection('categorias').doc(gid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Información de categoría no enconrtada')
            }
        })
        .catch(err => {
            //console.error(`Error al obtener la categoría`,err);
            callback("Error al obtener la categoría",err)
        })
  }


// Agregar una categoría
function addCategoria(categoria, callback){
    return db.collection('categorias').add(categoria)
        .then(()=>{
            callback('Catgoría creada exitósamente')
        })
        .catch(err => {
            callback("Error al crear la categoría",err)
        })
  }

// Actualizar una categoría, sobre-escribiendo en la BD
function UpdateCategoriaTotally(gid, categoria, callback){
    return db.collection('categoria').doc(gid).set(categoria)
        .then(()=>{
            callback('Categoria actualizada exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar la categoria",err)
        })
  }  


// Actualizar una categoria, sin sobre-escribir en la BD
function UpdateCategoriaPartial(gid, categoria, callback){
    return db.collection('categorias').doc(gid).update(categoria)
        .then(()=>{
            callback('Categoria actualizada exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar la categoria",err)
        })
  }  


// Eliminar una categoria de la BD
function deleteCategoria(gid, callback){
    return db.collection('categorias').doc(gid).delete()
        .then(()=>{
            callback('Categoria eliminada exitósamente')
        })
        .catch(err => {
            callback("Error al eliminar la categoría",err)
        })
  }  


  module.exports = {
      getCategorias,
      getCategoria,
      addCategoria,
      UpdateCategoriaTotally,
      UpdateCategoriaPartial,
      deleteCategoria
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
