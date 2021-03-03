const express = require("express"); 
// const admin = require("firebase-admin"); 
const router = express.Router()

// var serviceAccount = require("./server/sharitys-d1b14-firebase-adminsdk-2mtlq-666e11d65a.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://sharitys-d1b14-default-rtdb.firebaseio.com"
// });

router.get('/home', (req,res) => {
    res.render('admin')
})

router.get('/', (req,res) => {
    res.send('admin index page')
})

module.exports = router