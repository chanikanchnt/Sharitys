//For Project Management -- JN

var express = require('express');
var app = express();
var sql = require("mssql");
const createpj = require('./createpj')
const deletepj = require('./deletepj')
const editpj = require('./editpj')
const viewpj = require('./viewpj')

dbConfig = {
    user: 'sa',
    password: '020Jenny!',
    server: 'localhost',
    database: 'projectdbtest' //Change to be projectdbtest for testing // sharitysdb
};

//show port
var server = app.listen(5000, function () {
    console.log('Server is running..');
});

// check connection
app.get('/check', function (req, res) {
    res.send('GET request to the homepage')
})

//use port 5000 when using with mssql***
app.use('/createpj', createpj)
app.use('/deletepj', deletepj)
app.use('/editpj', editpj)
app.use('/viewpj', viewpj)