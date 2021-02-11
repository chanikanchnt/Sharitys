//For Project Management -- JN

const express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Page Edit Project Is Showing..')
    next()
})

var dbConfig = {
    user: 'sa',
    password: '020Jenny!',
    server: 'localhost',
    database: 'projectdbtest',
    stream: false,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
        },
}

var sql = require("mssql");

// localhost:5000/editpj/x
router.get('/:num', function (req, res) { //Success (Can show the selected functiom)
    sql.connect(dbConfig).then(() => {
        return sql.query("SELECT * FROM shorttest WHERE num = " + req.params.num);
    }).then(result => {
        res.send(result.recordset);
    }).catch(err => {
        res.status(500).send("Something Went Wrong !!!");
    })
});

// localhost:5000/editpj
// TODO: Make the input as string and connect them together >> redirect as a hyperlink
// NOTE: Problem = cannot request body
router.post('/:num/:word/:currentnum', function (req, res) { //Success (Can edit)
    sql.connect(dbConfig).then(() => {
        //return sql.query("UPDATE shorttest SET num = " + req.body.num + ", word = " + req.body.word + " WHERE num = " + req.body.currentnum);
        return sql.query("UPDATE shorttest SET num = " + req.params.num + ", word = " + req.params.word + " WHERE num = " + req.params.currentnum);
    }).then(result => {
        res.status(200).send("Info Updated Successfully.");
    }).catch(err => {
        res.status(500).send("Something Went Wrong !!!");
    })
});


module.exports = router