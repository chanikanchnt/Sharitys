if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var DeleteProjectButton = document.getElementsByClassName('DeleteProjectButton')
    for (var i = 0; i < DeleteProjectButton.length; i++) {
        var button = DeleteProjectButton[i]
        button.addEventListener('click', DeleteProject)
    }    
}

function DeleteProject() {
    var projectToDelete = document.getElementById("SelectProjectToDelete").value;
    console.log(projectToDelete)
}


const express =require('express')  //Node.js: Uncaught ReferenceError: require is not defined
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

//let sqlRequest = new sql.Request();
//let sqlQuery = 'SELECT* FROM SHORTTEST WHERE num ='+projectToDelete;
//sqlRequest.query(sqlQuery)

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