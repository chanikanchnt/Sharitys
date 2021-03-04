const express = require("express"); 
const router = express.Router()

router.get('/home', (req,res) => {
    res.render('admin')
})

router.get('/', (req,res) => {
    res.send('admin index page')
})

module.exports = router