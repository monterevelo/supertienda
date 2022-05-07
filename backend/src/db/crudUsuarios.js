const db = require('./firebase.js');

// Obtener un solo usuario
function getUsuario(uid, callback){
    return db.collection('usuarios').doc(uid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Información de usuario no enconrtada')
            }
        })
        .catch(err => {
            //console.error(`Error al obtener los usuarios`,err);
            callback("Error al obtener el usuario",err)
        })
  }


// Agregar un usuario
function addUsuario(usuario, callback){
    return db.collection('usuarios').add(usuario)
        .then(()=>{
            callback('Usuario creado exitósamente')
        })
        .catch(err => {
            callback("Error al crear el usuario",err)
        })
  }

// Actualizar un usuario, sobre-escribiendo en la BD
function UpdateUsuarioTotally(uid, usuario, callback){
    return db.collection('usuarios').doc(uid).set(usuario)
        .then(()=>{
            callback('Usuario actualizado exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar el usuario",err)
        })
  }  


// Eliminar un usuario de la BD
function deleteUsuario(uid, callback){
    return db.collection('usuarios').doc(uid).delete()
        .then(()=>{
            callback('Usuario eliminado exitósamente')
        })
        .catch(err => {
            callback("Error al eliminar el usuario",err)
        })
  }  


  module.exports = {
      getUsuario,
      addUsuario,
      UpdateUsuarioTotally,
      deleteUsuario
  }
