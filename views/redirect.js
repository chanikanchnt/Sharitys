firebase.auth().onAuthStateChanged(function(user){
    if(user){
        user.getIdTokenResult()
            .then((idTokenResult) => {
                if(idTokenResult.claims.role == 'admin'){
                    window.location.replace('/ad/');
                }
                else if(idTokenResult.claims.role == 'fd'){
                    window.location.replace('/fd');
                }
                else if(idTokenResult.claims.role == 'dn'){
                    window.location.replace('/profile');
                }
                else{
                    // to be replace by Dashboard page
                    window.location.replace('/');
                    console.log("no role found")
                }
            }).catch((error) => {
                console.log(error)
            })
    }else{
        console.log("redirect page: user not found")
    }
})

