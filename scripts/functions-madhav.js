// function will keep track of user's UID on any page they are in.
function sayHi() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            //changes go here
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);


                })

            document.getElementById("profile-btn")
                .addEventListener("click", function () {
                    window.location.href = "profile.html?id=" + user.uid;
                });


        } else {
            // No user is signed in.
        }
    });
};
window.addEventListener('load', function () {
    sayHi();
});

