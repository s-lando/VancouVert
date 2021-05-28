$("#overview").ready(function () {

    const users = db.collection("users");

    firebase.auth().onAuthStateChanged((user) => {
        users
            .doc(user.uid)
            .get()
            .then(function (doc) {
                let worst = doc.data().worstCategory;
                let name = doc.data().name;
                let ftprint = doc.data().currentFootprint;

                $("#your-worst-cat").append(worst);
                $("#user-name").append(name);
                $("#user-name2").append(name);
                $("#currentUserNumber").append(ftprint);

                genIncentiveByWorstCat(worst);
            })
    })
})

function genIncentiveByWorstCat(category) {

    var incentives = db.collection("incentives").where("type", "==", category);

    incentives
        .where("random", ">=", Math.floor((Math.random() * 1000)))
        .limit(1)
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var desc = doc.data().desc;
                var org = doc.data().org;
                var linkURL = doc.data().url;
                var image = doc.data().image;
                console.log(desc + ", " + org + ", " + linkURL);

                $(".card-text").append(org + " offers " + desc);
                $("#type-picture").attr("src", ("../img/" + image));
                $("#learnMore").attr("href", linkURL);
            })
        })
}