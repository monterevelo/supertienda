const db = require('./firebase.js');

// Get all customers
function getCustomers(callback) {
    return db
      .collection("customers")
      .get()
      .then((docs) => {
        var arrayCustomers = [];
        docs.forEach((customer) => {
          const obj = customer.data();
          obj.cid = customer.id;
          arrayCustomers.push(obj);
        });
        // WHEN WE GET HERE, THE RESPONSE SHOULD BE SENT TO THE GET REQUEST
        callback(arrayCustomers);
      })
      .catch((error) => {
        callback(`Error getting customers ${error}`);
      });
  }
  
  // Get a specific customer
  function getCustomer(cid, callback) {
    return db
      .collection("customers")
      .doc(cid)
      .get()
      .then((refDoc) => {
        callback(refDoc.data());
      })
      .catch((error) => {
        callback(`Error getting customer ${error}`);
      });
  }
  
  // Add a customer
  function addCustomer(customer, callback) {
    return db
      .collection("customers")
      .add(customer)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error creating customer ${error}`);
      });
  }
  
  //Add a costumer through their id
  function addCustomerWithID(cid, customer, callback) {
    return db
      .collection("customers")
      .doc(cid)
      .set(customer)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error creating customer ${error}`);
      });
  }
  
  // Update a costumer, overwriting in the DB
  function updateCustomerTotally(cid, customer, callback) {
    return db
      .collection("customers")
      .doc(cid)
      .set(customer)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error updating customer ${error}`);
      });
  }
  
  // Update a costumer, without overwriting in the DB
  function updateCustomerPartially(cid, customer, callback) {
    return db
      .collection("customers")
      .doc(cid)
      .update(customer)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error updating customer ${error}`);
      });
  }
  
  // Delete a costumer from the DB
  function deleteCustomer(cid, callback) {
    return db
      .collection("customers")
      .doc(cid)
      .delete()
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error removing customer ${error}`);
      });
  }
  
  // Filter a costumer from the DB
  function searchCustomer(city, callback) {
    return db
      .collection("customers")
      .where("city", "==", city)
      .get()
      .then((refDoc) => {
        var arrayCustomers = [];
        refDoc.forEach((doc) => {
          //doc.id --> El id del documento
          arrayCustomers.push(doc.data());
        });
        callback(arrayCustomers);
      })
      .catch((err) => {
        callback("Error searching customer ", err);
      });
  }


  module.exports = {
    getCustomers,
    getCustomer,
    addCustomer,
    addCustomerWithID,
    updateCustomerTotally,
    updateCustomerPartially,
    deleteCustomer,
    searchCustomer
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
