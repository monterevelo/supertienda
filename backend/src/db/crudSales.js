const db = require('./firebase.js');

// Get all sales
function getSales(callback){
    return db.collection('sales').get()
        .then((refDoc)=>{
            var arraySales = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayVentas.push(doc.data());
            })
            callback(arraySales);
        })
      .catch(err => {
          //console.error(`Error getting sales`,err);
          callback("Error getting sales",err)
      })
  }

// Get a single sale
function getSale(vid, callback){
    return db.collection('sales').doc(vid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Sale information not found')
            }
        })
        .catch(err => {
            //console.error(`Error getting sale`,err);
            callback("Error getting sale",err)
        })
  }


// Add a sale
function addSale(sale, callback){
    return db.collection('sales').add(sale)
        .then(()=>{
            callback('Sale created successfully')
        })
        .catch(err => {
            callback("Error creating sale",err)
        })
  }

// Update a sale, overwriting in the DB
function updateSaleTotally(vid, sale, callback){
    return db.collection('sales').doc(vid).set(sale)
        .then(()=>{
            callback('Sale updated successfully')
        })
        .catch(err => {
            callback("Error updating sale",err)
        })
  }  


// Update a sale, without overwriting in the DB
function updateSalePartially(vid, sale, callback){
    return db.collection('sales').doc(vid).update(sale)
        .then(()=>{
            callback('Sale updated successfully')
        })
        .catch(err => {
            callback("Error updating sale",err)
        })
  }  


// Delete a sale fron the DB
function deleteSale(vid, callback){
    return db.collection('sales').doc(vid).delete()
        .then(()=>{
            callback('Sale removed successfully')
        })
        .catch(err => {
            callback("Error removing sale",err)
        })
  }  


  module.exports = {
      getSales,
      getSale,
      addSale,
      updateSaleTotally,
      updateSalePartially,
      deleteSale
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
