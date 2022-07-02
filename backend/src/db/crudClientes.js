const db = require('./firebase.js');

// Obtener todos los clientes
function getClientes(callback) {
    return db
      .collection("clientes")
      .get()
      .then((docs) => {
        var arrayClientes = [];
        docs.forEach((cliente) => {
          const obj = cliente.data();
          obj.cid = cliente.id;
          arrayClientes.push(obj);
        });
        // CUANDO LLEGAMOS ACÁ, SE DEBE ENVIAR LA RESPUESTA AL GET REQUEST
        callback(arrayClientes);
      })
      .catch((error) => {
        callback(`Error al obtener clientes ${error}`);
      });
  }
  
  // Obtener un cliente específico
  function getCliente(cid, callback) {
    return db
      .collection("clientes")
      .doc(cid)
      .get()
      .then((refDoc) => {
        callback(refDoc.data());
      })
      .catch((error) => {
        callback(`Error al obtener clientes ${error}`);
      });
  }
  
  // Crear un cliente
  function addCliente(cliente, callback) {
    return db
      .collection("clientes")
      .add(cliente)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error al crear cliente ${error}`);
      });
  }
  
  function addClienteWithID(cid, cliente, callback) {
    return db
      .collection("clientes")
      .doc(cid)
      .set(cliente)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error al crear cliente ${error}`);
      });
  }
  
  function updateClienteTotally(cid, cliente, callback) {
    return db
      .collection("clientes")
      .doc(cid)
      .set(cliente)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error al actualizar cliente ${error}`);
      });
  }
  
  function updateClientePartially(cid, cliente, callback) {
    return db
      .collection("clientes")
      .doc(cid)
      .update(cliente)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error al actualizar cliente ${error}`);
      });
  }
  
  function deleteCliente(cid, callback) {
    return db
      .collection("clientes")
      .doc(cid)
      .delete()
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error al eliminar cliente ${error}`);
      });
  }
  
  function searchCliente(ciudad, callback) {
    return db
      .collection("clientes")
      .where("ciudad", "==", ciudad)
      .get()
      .then((refDoc) => {
        var arrayClientes = [];
        refDoc.forEach((doc) => {
          //doc.id --> El id del documento
          arrayClientes.push(doc.data());
        });
        callback(arrayClientes);
      })
      .catch((err) => {
        callback("Error al buscar cliente ", err);
      });
  }

//*************************************** 

/* 
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


// Agregar un cliente
function addCliente(cliente, callback){
    return db.collection('clientes').add(cliente)
        .then(()=>{
            callback('Cliente creado exitósamente')
        })
        .catch(err => {
            callback("Error al crear el cliente",err)
        })
  }

// Actualizar un cliente, sobre-escribiendo en la BD
function UpdateClienteTotally(cid, cliente, callback){
    return db.collection('clientes').doc(cid).set(cliente)
        .then(()=>{
            callback('Cliente actualizado exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar el cliente",err)
        })
  }  


// Actualizar un cliente, sin sobre-escribir en la BD
function UpdateClientePartial(cid, cliente, callback){
    return db.collection('clientes').doc(cid).update(cliente)
        .then(()=>{
            callback('Cliente actualizado exitósamente')
        })
        .catch(err => {
            callback("Error al actualizar el cliente",err)
        })
  }  


// Eliminar un cliente de la BD
function deleteCliente(cid, callback){
    return db.collection('clientes').doc(cid).delete()
        .then(()=>{
            callback('Cliente eliminado exitósamente')
        })
        .catch(err => {
            callback("Error al eliminar el cliente",err)
        })
  }  


//Filtrar un cliente de la BD - Por Ubicación
function searchCliente(ciudad, callback){
    return db.collection('clientes').where("ciudad","==",ciudad).get()
        .then((refDoc) => {
            var arrayClientes = [];
            refDoc.forEach(doc => {
                arrayClientes.push(doc.data());
            });
            callback (arrayClientes);
        })
        .catch((err) => {
            callback("Error al buscar el cliente",err)
        });
}; */


//********************************* */


  module.exports = {
      getClientes,
      getCliente,
      addCliente,
      addClienteWithID,
      updateClienteTotally,
      updateClientePartially,
      deleteCliente,
      searchCliente
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
