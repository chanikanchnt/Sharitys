//For Project Management -- JN

const express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Page Delete Project Is Showing..')
    next()
})

var dbConfig = {
    user: 'sa',
    password: '020Jenny!',
    server: 'localhost',
    database: 'projectdbtest'
}

var sql = require("mssql");

// TODO: **When admin click the delete button** --> Redirect to localhost:5000/deletepj/x url
// res.redirect('localhost:5000/deletepj/x');

// localhost:5000/deletepj/x
// TODO: Add condition if the input project num does not exist 
//  > then show 'Project does not exists' (now it shows: Project Deleted Successfully.)
router.get('/:num', function (req, res) { //Success (Can delete)
    sql.connect(dbConfig).then(() => {
        return sql.query("DELETE FROM shorttest WHERE num = " + req.params.num);
    }).then(result => {
        res.status(200).send("Project Deleted Successfully.");
    }).catch(err => {
        res.status(500).send("Something Went Wrong !!!");
    })
});

module.exports = router