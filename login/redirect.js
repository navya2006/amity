firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
    } else{
        window.location.replace('dashboard/index.html');
    }
})
