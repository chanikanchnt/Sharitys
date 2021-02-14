//For Project Management -- JN
//Without login

var express = require('express');
var app = express();
var sql = require("mssql");
const createpj = require('./Design_Material/createpjsql')
const deletepj = require('./Design_Material/deletepjsql')
const editpj = require('./Design_Material/editpj')
const viewpj = require('./Design_Material/viewpj')

dbConfig = {
    user: 'sa',
    password: '020Jenny!',
    server: 'localhost',
    database: 'projectdbtest', //Change to be projectdbtest for testing // sharitysdb
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};

//show port
var server = app.listen(5000, function () {
    console.log('Server is running..');
});

// check connection
app.get('/check', function (req, res) {
    res.send('GET request to the homepage')
})

//use port 5000 when using with mssql*** call function / request on each .js directly ****************
app.use('/createpj_db', createpj) //localhost:5000/createpj_db/addnw/11-'eleven'
app.use('/deletepj_db', deletepj) // localhost:5000/deletepj_db/11
app.use('/editpj_db', editpj) 
app.use('/viewpj_db', viewpj)

////////Interface/////// ****************
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(express.static('Design_Material'));

app.get('/viewallpj', (req,res)=>{
    res.render('All_Project')
}) 

app.get('/createpj', (req,res) => {
    res.render('Create_Project')
}) 

app.get('/editpj', (req,res) => {
    res.render('Edit_Project')
}) 

app.get('/deletepj', (req,res) => {
    res.render('Delete_Project')
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