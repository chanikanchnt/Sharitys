//For Project Management -- JN

const express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    console.log('Page Create Project Is Showing..')
    next()
})

var dbConfig = {
    user: 'sa',
    password: '020Jenny!',
    server: 'localhost',
    database: 'projectdbtest'
}

var sql = require("mssql");

//TODO: Extend string to be hyperlink
//  localhost:5000/createpj
/* var app = express();
app.set('views', __dirname + '/views_createpj')
app.set('view engine', 'pug')
// check connection
app.get('/check', function (req, res) {
    res.render('createpj')
    res.send('GET request to the homepage')
}) */

/* router.get('/', (req, res) => {
    res.sendFile('./views_createpj/createpj.pug', {
      root: '.'
    });
 }); */

//  localhost:5000/createpj/addnw "ADD PROJECT TO DB BY USING PARAMS"
router.get('/addnw/:num-:word', function (req, res) { //Success (Can add pj)

    sql.connect(dbConfig).then(() => {
        //return sql.query("INSERT INTO shorttest VALUES(" + req.body.num + ", '" + req.body.word + "');");
        return sql.query("INSERT INTO shorttest VALUES(" + req.params.num + ", " + req.params.word + ");");
    }).then(result => {
        res.status(200).send("Data Added Successfully.");
    }).catch(err => {
        res.status(415).send("Something Went Wrong !!!");
    })
});

router.get('/:title-:purpose-:plan-:benefits-:banktype-:banknumber-:endDate-:facebook-:twitter-:ig-:pjownertype-:ownerName-:ownerEmail-:accountName-:accountLastname-:accountPhoneNumber-:accountEmail-:accountAddress', function (req, res) { //Success (Can add pj)

    sql.connect(dbConfig).then(() => {
        return sql.query("INSERT INTO shorttest VALUES(" + req.params.title + ", " 
                                                        + req.params.purpose + ", " 
                                                        + req.params.plan + ", " 
                                                        + req.params.benefits + ", " 
                                                        + req.params.banktype + ", " 
                                                        + req.params.banknumber + ", " 
                                                        + req.params.endDate + ", " 
                                                        + req.params.facebook + ", " 
                                                        + req.params.twitter + ", " 
                                                        + req.params.ig + ", " 
                                                        + req.params.pjownertype + ", " 
                                                        + req.params.ownerName + ", " 
                                                        + req.params.ownerEmail + ", " 
                                                        + req.params.accountName + ", " 
                                                        + req.params.accountLastname + ", " 
                                                        + req.params.accountPhoneNumber + ", " 
                                                        + req.params.accountEmail + ", " 
                                                        + req.params.accountAddress 
                                                        + ");"
        );
    }).then(result => {
        res.status(200).send("Data Added Successfully.");
    }).catch(err => {
        res.status(415).send("Something Went Wrong !!!");
    })
});
module.exports = router