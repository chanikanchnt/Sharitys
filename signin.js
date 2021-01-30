const express = require("express"); 
const PORT = process.env.PORT || 3000
const admin = require("firebase-admin"); 
const cookieParser = require("cookie-parser"); 
  
const app = express(); 
app.use(cookieParser()); 

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

var serviceAccount = require("./firebaseAdminSDK/sharitys-d1b14-firebase-adminsdk-2mtlq-666e11d65a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sharitys-d1b14-default-rtdb.firebaseio.com"
});

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/signin', (req,res) => {
    res.render('signin')
    // TODO create user
})

app.get('/signinsuccess', (req,res) => {
    res.render('signinsuccess')
    console.log(req.decodedClaims.uid)
})

app.get('/signout', (req,res) => {
    res.render('signout')
}) 

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})

module.exports = app