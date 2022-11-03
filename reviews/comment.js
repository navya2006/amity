(function () {
    var username = $('#name');
    var email = $('#email');
    var comment = $('#comment');
    var timestamp = Date.now();
    const dbRoot = firebase.database();
    $('.btn').on('click', function () {
        const commentUpdate = {
            comment: comment.val(),
            name: username.val(),
            email: email.val(),
            time: timestamp,
        };
        if (comment.val() == "") {
            $(".alert").css("display", "block");
            console.log('shit');
        } else if (email.val() == "") {
            $(".alert").css("display", "block");
            console.log('shit');
        } else if (email.val().includes("@") == false) {
            $(".alert").css("display", "block");
            console.log('shit');
        } else if (username.val() == "") {
            $(".alert").css("display", "block");
            console.log('shit');
        } else {
            const newPostKey = dbRoot.ref('comments/').push().key;
            dbRoot.ref('comments/' + newPostKey).set(commentUpdate);
            console.log('yay');
            $(".alert").css("display", "none");
        }
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    });

}());