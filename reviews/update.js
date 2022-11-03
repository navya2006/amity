(function () {
    var dbRoot = firebase.database();
    var comments = dbRoot.ref('comments/');
    comments.on('child_added', snap => {
        var publishedOn = Date(snap.child("time").val());
        $('.comments').prepend('<a class="mb-3 align-left fromtop"><div class="comment row no-gutters"><div class="col"><div class="card-body"><h5 class="card-title">' + snap.child("name").val().replace(/>/g, "&gt;").replace(/</g, "&lt;") + '</h5><p class="card-text">' + snap.child("comment").val().replace(/>/g, "&gt;").replace(/</g, "&lt;") + '</span></small></p></div></div></div></a>');
    });
}());