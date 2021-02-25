const express = require("express"); 
const PORT = process.env.PORT || 3000
const admin = require("firebase-admin"); 
// const cookieParser = require("cookie-parser"); 
  
const app = express(); 

// app.use(cookieParser()); 
app.use(require("body-parser").json());

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

var serviceAccount = require("./server/sharitys-d1b14-firebase-adminsdk-2mtlq-666e11d65a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sharitys-d1b14-default-rtdb.firebaseio.com"
});

app.get('/setAdmin', async (req,res) => {
    admin.auth()
        .setCustomUserClaims(req.body.uid, {
            role: 'admin'
        })
        .then(() => console.log('admin role grant'))
        .catch((error) => {
            console.log("error "+req.body.uid)
        })
})

app.get('/setFd', async (req,res) => {
    admin.auth()
        .setCustomUserClaims(req.body.uid, {
            role: 'fd'
        })
        .then(() => console.log('fd role grant'))
        .catch((error) => {
            console.log("error "+req.body.uid)
        })
})

app.get('/setDn', async (req,res) => {
    admin.auth()
        .setCustomUserClaims(req.body.uid, {
            role: 'dn'
        })
        .then(() => console.log('dn role grant'))
        .catch((error) => {
            console.log("error "+req.body.uid)
        })
})

app.get("/getClaims", async (req, res) => {
    admin.auth()
          .getUser(req.body.uid)
          .then((userRecord) => console.log(userRecord))
  })

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/home', (req,res) => {
    res.render('home')
})

app.get('/signin', (req,res) => {
    res.render('signin')
})

app.get('/signinsuccess', (req,res) => {
    res.render('signinsuccess')
})

app.get('/signout', (req,res) => {
    res.render('signout')
}) 

app.get('/profile', (req,res) => {
    res.render('profile')
})

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})

module.exports = app