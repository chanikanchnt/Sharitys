const express = require("express"); 
const admin = require("firebase-admin"); 
const router = express.Router()

var serviceAccount = require("./server/sharitys-d1b14-firebase-adminsdk-2mtlq-666e11d65a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sharitys-d1b14-default-rtdb.firebaseio.com"
});

// router.use(function timeLog(req,res,next){
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/signin', (req,res) => {
    res.render('signin')
})

router.get('/signinSuccess', (req,res) => {
    res.render('signinSuccess')
})

router.get('/signout', (req,res) => {
    res.render('signout')
}) 

router.post('/setCustomClaims', (req,res) => {
    const idToken = req.body.idToken
    admin.auth().verifyIdToken(idToken).then((claims) => {
        // if( typeof claims.email !== 'undefined' &&
        //     typeof claims.email_verified !== 'undefined' &&
        //     claims.email_verified &&
        //     claims.email.endsWith('@admin.sharitys.com')) {
            // claims.email.endsWith('@gmail.com')) {
            if(claims.email == 'sharitys.test@gmail.com'){
                admin.auth().setCustomUserClaims(claims.sub, {
                    role: 'admin'
                }).then(() => {
                    console.log('setCustomClaims ad success')
                    res.end(JSON.stringify({
                        status: 'success'
                    }))                    
                })
        }
        else if(typeof claims.email !== 'undefined' &&
                typeof claims.email_verified !== 'undefined' &&
                claims.email_verified &&
                claims.email.endsWith('@fd.sharitys.com')){
            admin.auth().setCustomUserClaims(claims.sub, {
                role: 'fd'
            }).then(() => {
                console.log('setCustomClaims fd success')
                res.end(JSON.stringify({
                    status: 'success'
                }))                    
            })
        }
        else{
            // res.end(JSON.stringify({status: 'ineligible'}))
            admin.auth().setCustomUserClaims(claims.sub, {
                role: 'dn'
            }).then(() => {
                console.log('setCustomClaims dn success')
                res.end(JSON.stringify({
                    status: 'success'
                }))                    
            })
        }
    })
})

router.get("/getClaims", async (req, res) => {
    admin.auth()
          .getUser(req.body.uid)
          .then((userRecord) => console.log(userRecord))
})

router.get("/redirect", async (req, res) => {
    res.render('redirect')
  })

router.get('/', (req,res) => {
    res.send('auth index page')
})

module.exports = router