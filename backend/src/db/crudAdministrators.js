const db = require('./firebase.js');

// Get a single administrator
function getAdministrator(aid, callback) {
    return db.collection('administrator').doc(aid).get()
        .then((refDoc) => {
            if (refDoc.exists) {
                callback(refDoc.data());
            } else {
                callback('Administrator information not found')
            }
        })
        .catch(err => {
            //console.error(`Failed to get administrators`,err);
            callback("Failed to get administrator", err)
        })
}


/* // Add an administrator
function addAdministrator(administrator, callback) {
    return db.collection('administrators').add(administrator)
        .then(() => {
            callback('Administrator created successfully')
        })
        .catch(err => {
            callback("Failed to create administrator", err)
        })
} */


//*********************

// Add an administrator
function addAdministrator(administrator, callback) {
    return db
      .collection("administrators")
      .add(administrator)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error creating administrator ${error}`);
      });
  }
  
  //Add an administrator through their id
  function addAdministratorWithID(aid, administrator, callback) {
    return db
      .collection("administrators")
      .doc(aid)
      .set(administrator)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error creating administrator ${error}`);
      });
  }


//*********************




// Update an administrator, overwriting in the DB
function updateAdministratorTotally(aid, administrator, callback) {
    return db.collection('administrators').doc(aid).set(administrator)
        .then(() => {
            callback('Administrator updated successfully')
        })
        .catch(err => {
            callback("Failed to update administrator", err)
        })
}


// Delete an administrator from the DB
function deleteAdministrator(aid, callback) {
    return db.collection('administrators').doc(aid).delete()
        .then(() => {
            callback('Administrator removed successfully')
        })
        .catch(err => {
            callback("Failed to remove administrator", err)
        })
}


// Filter an administrator from the DB
function searchAdministrator(city, callback) {
    return db.collection('administrators').where("city", "==", city).get()
        .then((refDoc) => {
            var arrayAdministrators = [];
            refDoc.forEach(doc => {
                arrayAdministrators.push(doc.data());
            })
            callback(arrayAdministrators);
        })
        .catch((err) => {
            callback("Failed to find administrator", err)
        })
}

module.exports = {
    getAdministrator,
    addAdministrator,
    addAdministratorWithID,
    updateAdministratorTotally,
    deleteAdministrator,
    searchAdministrator
}
