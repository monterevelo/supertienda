const db = require('./firebase.js');

// Get all categories
function getCategories(callback){
    return db.collection('categories').get()
        .then((refDoc)=>{
            var arrayCategories = [];
            refDoc.forEach(doc=>{
                //console.log(doc.id,'=>', doc.data());
                arrayCategories.push(doc.data());
            })
            callback(arrayCategories);
        })
      .catch(err => {
          //console.error(`Error getting categories`,err);
          callback("Error getting categories",err)
      })
  }

// Get a single category
function getCategory(gid, callback){
    return db.collection('categories').doc(gid).get()
        .then((refDoc)=>{
            if(refDoc.exists){
                callback(refDoc.data());
            }else{
                callback('Category information not found')
            }
        })
        .catch(err => {
            //console.error(`Error getting category`,err);
            callback("Error getting category",err)
        })
  }


// Add a category
function addCategory(category, callback){
    return db.collection('categories').add(category)
        .then(()=>{
            callback('Category created successfully')
        })
        .catch(err => {
            callback("Error creating category",err)
        })
  }

// Update a category, overwriting in the DB
function updateCategoryTotally(gid, category, callback){
    return db.collection('categories').doc(gid).set(category)
        .then(()=>{
            callback('Category updated successfully')
        })
        .catch(err => {
            callback("Error updating category",err)
        })
  }  


// Update a category, without overwriting the DB
function updateCategoryPartially(gid, category, callback){
    return db.collection('categories').doc(gid).update(category)
        .then(()=>{
            callback('Category updated successfully')
        })
        .catch(err => {
            callback("Error updating category",err)
        })
  }  


// Delete a category from the DB
function deleteCategory(gid, callback){
    return db.collection('categories').doc(gid).delete()
        .then(()=>{
            callback('Category deleted successfully')
        })
        .catch(err => {
            callback("Error removing category",err)
        })
  }  

  module.exports = {
      getCategories,
      getCategory,
      addCategory,
      updateCategoryTotally,
      updateCategoryPartially,
      deleteCategory
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
