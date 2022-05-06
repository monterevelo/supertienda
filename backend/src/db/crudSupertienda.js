const db = require('./firebase.js');

// Obtener todos los clientes
function getClientes(){
    
}


function getClientes(){
    return db.collection('clientes').get()
        .then((refDoc)=>{
            refDoc.forEach(doc=>{
                console.log(doc.id,'=>', doc.data());
            })
        })
      .catch(err => {
        console.error(`Error al obtener los clientes`,err);
      })
  }

  module.exports = {
      getClientes
  }
