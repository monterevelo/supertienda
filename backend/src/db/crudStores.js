const db = require('./firebase.js');

// Get all stores
function getStores(callback){
    return db.collection('stores').get()
        .then((refDoc)=>{
            var arrayStores = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayStores.push(doc.data());
            })
            callback(arrayStores);
        })
      .catch(err => {
          //console.error(`Error getting stores`,err);
          callback("Error getting stores",err)
      })
  }

// Get a single store
function getStore(tid, callback){
    return db.collection('stores').doc(tid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Store information not found')
            }
        })
        .catch(err => {
            //console.error(`Error getting store`,err);
            callback("Error getting store",err)
        })
  }


// Add a store
function addStore(store, callback){
    return db.collection('stores').add(store)
        .then(()=>{
            callback('Store created successfully')
        })
        .catch(err => {
            callback("Error creating store",err)
        })
  }

// Update a store, overwriting the DB
function updateStoreTotally(tid, store, callback){
    return db.collection('stores').doc(tid).set(store)
        .then(()=>{
            callback('Store udated successfully')
        })
        .catch(err => {
            callback("Error updating store",err)
        })
  }  


// Update a store, without overwriting the DB
function updateStorePartially(tid, store, callback){
    return db.collection('stores').doc(tid).update(store)
        .then(()=>{
            callback('Store udated successfully')
        })
        .catch(err => {
            callback("Error updating store",err)
        })
  }  


// Delete a store from DB
function deleteStore(tid, callback){
    return db.collection('stores').doc(tid).delete()
        .then(()=>{
            callback('Store removed successfully')
        })
        .catch(err => {
            callback("Error removing store",err)
        })
  }  


  module.exports = {
      getStores,
      getStore,
      addStore,
      updateStoreTotally,
      updateStorePartially,
      deleteStore
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
