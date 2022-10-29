firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
    } else{
        window.location.replace('index.html');
    }
})