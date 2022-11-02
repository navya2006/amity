const authRoot = firebase.auth();
    const btnRegis = document.getElementById('submit');
    const emailRegis = document.getElementById('username');
    const passRegis = document.getElementById('password');

    $('#submitb').on('click', function(event){

        event.preventDefault();
        
        const mail = $('#username').val();
        const pass = $('#password').val();
        const promise = authRoot.createUserWithEmailAndPassword(mail, pass);
        promise.then(function (){
            window.location.replace("dashboard/index.html");
        }).catch(function (e) {
            console.log("e");
            $("#error").html("Email id is Already in Use");
        })
    
    })
