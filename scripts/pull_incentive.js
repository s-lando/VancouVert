$("#incent-tab").ready(function () {

    const users = db.collection("users");

    firebase.auth().onAuthStateChanged((user) => {
        users
        .doc(user.uid)
        .get()
        .then(function(doc) {
            let worst = doc.data().worstCategory;
            console.log(worst);
            genIncentiveByWorstCat(worst);
        })
    })
})

function genIncentiveByWorstCat(category) {
    console.log(category);
    const incentives = db.collection("incentives");

    incentives
    .where("type", "==", category)
    .limit(1)
    .get()
    .then(function (snap) {
        snap.forEach(function (doc) {
            var desc = doc.data().desc;
            var org = doc.data().org;
            var linkURL = doc.data().url;
            var image = doc.data().image;
            console.log(desc + ", " + org + ", " + linkURL);
            console.log(image);

            var htmlContent = 
            $(".card-title").append(org);
            $(".card-text").append(desc);
            $("#type-picture").attr("src", ("../img/" + image));
            $("#incentive_url").attr("href", linkURL);
        })
    })
}