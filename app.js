const express = require("express"); 
const PORT = process.env.PORT || 3000
const admin = require("firebase-admin"); 
const bodyParser = require("body-parser")
// const cookieParser = require("cookie-parser"); 
const app = express(); 

const auth = require("./auth")
const ad = require("./ad")
const omise_node = require("./omise-node")
  
// app.use(cookieParser()); 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/auth', auth)
app.use('/ad', ad)
app.use('/omise', omise_node)

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

// var serviceAccount = require("./server/sharitys-d1b14-firebase-adminsdk-2mtlq-666e11d65a.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://sharitys-d1b14-default-rtdb.firebaseio.com"
// });

app.get('/home', (req,res) => {
    res.render('home')
})

app.get('/profile', (req,res) => {
    res.render('profile')
})

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})

module.exports = app