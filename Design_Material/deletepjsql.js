const express =require("express")  //Node.js: Uncaught ReferenceError: require is not defined
const router = express.Router()

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
sql.connect(dbConfig,function(err){
    if (err) console.log(err);
})

router.get('/admincf/:num', function (req, res) { //Success (Can really delete)
    sql.connect(dbConfig).then(() => {
        //return sql.query("DELETE FROM shorttest WHERE num = " + req.params.num);
        return sql.query("UPDATE shorttest SET pjstatus = 'Terminated' WHERE num = " + req.params.num);
    }).then(result => {
        res.status(200).send("Project Status = Terminated Successfully.");
    }).catch(err => {
        res.status(500).send("Something Went Wrong !!!");
    })
});

module.exports = router