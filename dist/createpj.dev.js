"use strict";

var express = require('express');

var app = express();

var mysql = require('mysql'); // mock data


var products = [{
  id: '1001',
  name: 'Node.js for Beginners',
  category: 'Node',
  price: 990
}, {
  id: '1002',
  name: 'React 101',
  category: 'React',
  price: 3990
}, {
  id: '1003',
  name: 'Getting started with MongoDB',
  category: 'MongoDB',
  price: 1990
}];
app.set('views', __dirname + '/views_createpj');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.send('Hello World by Jenny');
});
app.get('/createpj', function (req, res) {
  res.render('createpj', {
    message: 'This is sent from createpj.js file'
  });
});
app.get('/products', function (req, res) {
  res.json(products);
});
app.get('/products/:id', function (req, res) {
  var id = req.params.id;
  var result = products.find(function (product) {
    return product.id === id;
  });
  res.json(result);
});
app.put('/products/:id', function (req, res) {
  var id = req.params.id;
  res.json({
    id: id
  });
});
app.post('/products', function (req, res) {
  var payload = req.body;
  res.json(payload);
});
app.listen(3000);