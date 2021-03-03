var user = firebase.auth().currentUser
var name, email, photoUrl, uid, emailVerified;
firebase.auth().onAuthStateChanged(function(user) {
    if(user != null){
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        
        document.getElementById('username').textContent = name;
        document.getElementById('email').textContent = email;
        document.getElementById('profile-picture').src = photoUrl;
        // document.getElementById('uid').textContent = uid;

        document.getElementById('edit-profile').addEventListener('click', function(){
            // user.updateProfile({
            // })
        })
    }
    else{
        console.log('no user')
    }
});

function editProfile(userId, name, email, imageUrl, phoneNumber, address){

}




