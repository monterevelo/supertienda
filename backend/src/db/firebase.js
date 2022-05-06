const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./supertienda-d8494-c9dbc9f76c21.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;
