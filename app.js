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

app.use(express.static('Design_Material'));

app.get('/donatest', (req,res) => {
    res.render('Donate_Status')
}) 

app.get('/giftlist', (req,res) => {
    res.render('Gift_List')
}) 

app.get('/progress', (req,res) => {
    res.render('Progress_Update')
}) 

app.get('/pjdescription', (req,res) => {
    res.render('Project_Description')
}) 

/////////////////////////////////////////////////////////////////  
//var http = require('http');
//http.createServer(onRequest_b).listen(5000);
//function onRequest_b (req, res) {
  //  res.write('Response from 9012\n');
    //res.end();
 // }

var sqlport = process.env.PORT || 5000;

app.get('/viewallpj', function (req,res){
    res.render('All_Project')
}) 

app.get('/createpj', (req,res) => {
    res.render('Create_Project')
}) 

app.get('/editpj', (req,res) => {
    res.render('Edit_Project')
}) 

//////////////////////////////////////////////////////////////////

app.listen(sqlport, function () {
    console.log('Example app listening on port ' + sqlport + '!');
  });
   

app.listen(3000, () => {
    console.log(`Server is running on port : 3000`)
})

module.exports = app