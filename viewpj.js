//For Project Management -- JN

const express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Page View Project Is Showing..')
    next()
})

var dbConfig = {
    user: 'sa',
    password: '020Jenny!',
    server: 'localhost',
    database: 'projectdbtest'
}


//npm install mssql
var sql = require("mssql");

//  localhost:5000/viewpj/all
router.get('/all', function (req, res) { //Success (Can view all pj)
    sql.connect(dbConfig).then(() => {
        return sql.query("SELECT * FROM shorttest;");
    }).then(result => {
        res.send(result.recordset);
    }).catch(err => {
        res.status(500).send("Something Went Wrong !!!");
    })
});

//Show selected info
router.get('/selectsth/:num', function (req, res) { //Success (Can view the pj)
    // connect to your database
    sql.connect(dbConfig, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * FROM shorttest WHERE num = ' + req.params.num, function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

module.exports = router