const express = require("express"); 
const PORT = process.env.PORT || 3000
const admin = require("firebase-admin"); 
const cookieParser = require("cookie-parser"); 
const https = require('https'); 
const fs = require('fs'); 
   
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
})

app.get('/signinsuccess', (req,res) => {
    res.render('signinsuccess')
    console.log('UID:'+req.decodedClaims.uid)
})

app.get('/savecookie', (req,res) => {
    const IdToken = req.query.IdToken
    saveCookie(IdToken, res)
})

app.get('/signout', (req,res) => {
    res.render('signout')
})

function saveCookie(idtoken, res) { 
   
    const expiresIn = 60 * 60 * 24 * 5 * 1000; 
    admin.auth().createSessionCookie(idtoken, {expiresIn}) 
    .then((sessionCookie) => { 
       const options = {maxAge: expiresIn,  
                httpOnly: true, secure: true}; 
   
       admin.auth().verifyIdToken(idtoken) 
        .then(function(decodedClaims) { 
           res.redirect('/success'); 
       }); 
    }, error => { 
        res.status(401).send("UnAuthorised Request"); 
    }); 
} 
   
function checkCookie(req, res, next) { 
   
    const sessionCookie = req.cookies.__session || ''; 
    admin.auth().verifySessionCookie( 
        sessionCookie, true).then((decodedClaims) => { 
            req.decodedClaims = decodedClaims; 
            next(); 
        }) 
        .catch(error => { 
  
           // Session cookie is unavailable or invalid.  
           // Force user to login. 
           res.redirect('/'); 
        }); 
} 

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})

module.exports = app