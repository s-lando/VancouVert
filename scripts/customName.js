function customName() {

    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            console.log(somebody.uid);
            db.collection("users")
                .doc(somebody.uid)
                .get()
                .then(function (doc) {
                    console.log(doc.data().name);
                    var n = doc.data().name;
                    $("#name-goes-here").text(n);
                })
        }
    })

}