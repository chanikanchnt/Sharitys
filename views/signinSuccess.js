// var initApp = function() {
firebase.auth().onAuthStateChanged(function(user){
    if(user){
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;

        user.getIdToken().then(function(accessToken){
            document.getElementById('signin-status').textContent = 'Signed in';
            document.getElementById('signin').textContent = 'Sign out';
            document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
                }, null, '  ');
        })

        writeUserData(uid, displayName, email, photoURL, phoneNumber, '')
    }else{
        document.getElementById('signin-status').textContent = 'Signed out';
        document.getElementById('signin').textContent = 'Sign in';
        document.getElementById('account-details').textContent = 'null';
    }
}, function(error){
    console.log(error)
})
// }

// window.addEventListener('load', initApp);

var database = firebase.database()

function writeUserData(userId, name, email, imageUrl, phoneNumber, address){
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl,
        phone_number: phoneNumber,
        address: address
    })
}