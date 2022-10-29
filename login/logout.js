function yeet (){
    firebase.auth().signOut().then(function() {
        window.location.replace('login.html');
        }).catch(function(error) {
                console.log(e);
    });
}