const express = require("express"); 
const router = express.Router()

var omise = require("omise")({
    'secretKey': 'skey_test_5mi2hi9dn2n262ac0mq',
    omiseVersion: '2019-05-29'
})

router.post('/charge', (req,res) => {
    omise.customers.create({
        description: req.body.displayName,
        email: req.body.email,
        card: req.body.card
    }, function(error, customer) {
        /* Response. */
        var customerId = customer.id
        console.log(customerId)
    })
})

// router.get('/', (req,res) => {
//     res.send('admin index page')
// })

module.exports = router