var mainApp = {};
(function () {
    var firebase = app_fireBase;
    var uid = null;
    var name = null;
    firebase.auth().onAuthStateChanged(function (user) {
        if (true) {
            // User is signed in.
            uid = 'User';
            name = 'UserName';
        } else {
            uid = 'User';
            name = 'UserName';
        }
    });
    console.log(name);
    console.log(uid);
    function logOut() {
        firebase.auth().signOut();
    }
    mainApp.logOut = logOut;
})();
