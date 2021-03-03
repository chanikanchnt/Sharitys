
// !!this page is not used anymore!!


firebase.auth().onAuthStateChanged(function(user){
    if(user){
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var uid = user.uid;
        // var phoneNumber = user.phoneNumber;
        // var providerData = user.providerData;

        user.getIdToken()
            .then((idToken) => {
                getToken(idToken)
                window.location.replace('/auth/redirect');
                // document.getElementById('signin-status').textContent = 'Signed in';
                // document.getElementById('signin').textContent = 'Sign out';
                // document.getElementById('account-details').textContent = JSON.stringify({
                //     displayName: displayName,
                //     email: email,
                //     emailVerified: emailVerified,
                //     phoneNumber: phoneNumber,
                //     photoURL: photoURL,
                //     uid: uid,
                //     accessToken: accessToken,
                //     providerData: providerData
                //     }, null, '  ');   
                // document.getElementById('profile-image').src = photoURL
                // document.getElementById('username').textContent = displayName
            }).catch((error) => {
                console.log(error)
            })

        // writeUserData(uid, displayName, email, photoURL, phoneNumber, '')
    }else{
        // document.getElementById('signin-status').textContent = 'Signed out';
        // document.getElementById('signin').textContent = 'Sign in';
        // document.getElementById('account-details').textContent = 'null';
        window.alert("no logged in user")
    }
}, function(error){
    console.log(error)
})

function getToken(idToken){
    return $.post(
        '/auth/setCustomClaims',
        {
            idToken: idToken
        },
        (data, status) => {
            // This is not required. You could just wait until the token is expired
            // and it proactively refreshes.
            console.log(data)
            if(status == 'success' && data){
                const json = JSON.parse(data)
                if(json && json.status == 'success'){
                    // Force token refresh. The token claims will contain the additional claims.
                    firebase.auth().currentUser.getIdToken(true)
                }
            }
        }
    )
}

// window.addEventListener('load', initApp);

// firebase.auth().currentUser.getIdTokenResult()
//     .then((idTokenResult) => {
//         if(idTokenResult.claims.role == 'admin'){
//             showadminUI()
//         }
//         else{
//             showregulatUI()
//         }
//     })

// var database = firebase.database()

// function writeUserData(userId, name, email, imageUrl, phoneNumber, address){
//     firebase.database().ref('users/' + userId).set({
//         username: name,
//         email: email,
//         profile_picture: imageUrl,
//         phone_number: phoneNumber,
//         address: address
//     })
// }