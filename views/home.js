/**
 * Redirects to the FirebaseUI widget.
 */
var signInWithRedirect = function() {
  window.location.assign('/auth/signin');

};

/**
 * Open a popup with the FirebaseUI widget.
 */
var signInWithPopup = function() {
  window.open('/signin', 'Sign In', 'width=985,height=735');
};


var initApp = function(){
  document.getElementById('signin-with-redirect').addEventListener('click',signInWithRedirect)
}

window.addEventListener('load', initApp)