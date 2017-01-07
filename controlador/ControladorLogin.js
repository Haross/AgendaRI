
function iniciarSG() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider).then(function(result) {
     window.location.href = "index.html";
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
  });

}
