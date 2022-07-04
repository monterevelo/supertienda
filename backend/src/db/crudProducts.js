const db = require('./firebase.js');

// Get all products
function getProducts(callback){
    return db.collection('products').get()
        .then((refDoc)=>{
            var arrayProducts = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayProducts.push(doc.data());
            })
            callback(arrayProducts);
        })
      .catch(err => {
          //console.error(`Error getting products`,err);
          callback("Error getting products",err)
      })
  }

// Get a single product
function getProduct(pid, callback){
    return db.collection('products').doc(pid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Product information not found')
            }
        })
        .catch(err => {
            //console.error(`Error getting product`,err);
            callback("Error getting product",err)
        })
  }


// Add a product
function addProduct(product, callback){
    return db.collection('products').add(product)
        .then(()=>{
            callback('Product created succcessfully')
        })
        .catch(err => {
            callback("Error creating product",err)
        })
  }

// Updating a product, overwriting the DB
function updateProductTotally(pid, product, callback){
    return db.collection('productos').doc(pid).set(product)
        .then(()=>{
            callback('Product updated seccessfully')
        })
        .catch(err => {
            callback("Error updating product",err)
        })
  }  


// Updating a product, without overwriting the DB
function updateProductPartial(pid, product, callback){
    return db.collection('products').doc(pid).update(product)
        .then(()=>{
            callback('Product updated seccessfully')
        })
        .catch(err => {
            callback("Error updating product",err)
        })
  }  


// Remove a product from the DB
function deleteProduct(pid, callback){
    return db.collection('products').doc(pid).delete()
        .then(()=>{
            callback('Product removed successfully')
        })
        .catch(err => {
            callback("Error removing product",err)
        })
  }  


  module.exports = {
      getProducts,
      getProduct,
      addProduct,
      updateProductTotally,
      updateProductPartial,
      deleteProduct
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
