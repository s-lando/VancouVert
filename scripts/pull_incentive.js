$(document).ready(function () {

    const incentives = db.collection("incentives");

    /* this function was when we wanted to pick a random incentive --!> 
     function pickRandomIncentive() {
        // look for documents where the 'random' attribute is greater than the number specified here, and get ONE document
        incentives.where("random", ">", Math.floor(Math.random() * 1000)).limit(1).get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    var desc = doc.data().desc;
                    var org = doc.data().org;
                    var linkURL = doc.data().url;
                    console.log(desc + ", " + org + ", " + linkURL);

                    $(".card-title").append(org);
                    $(".card-text").append(desc);
                    $("#incentive_url").attr("href", linkURL);
                })
            })
    }

    pickRandomIncentive(); */

    /* for Client Demo (before we knew how to read from user's worst category)
    $('#submit1').click(function () {
        let type = "electric";
        console.log(type);

        incentives
            .where("type", "==", type)
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

                    $(".card-title").append(org);
                    $(".card-text").append(desc);
                    $("#type-picture").attr("src", ("../img/" + image));
                    $("#incentive_url").attr("href", linkURL);
                })
            })
    }) */

    const users = db.collection("users");

    firebase.auth().onAuthStateChanged ((user) => {
        if (user) {
            console.log(user.uid);
        }

        let userId = user.uid;

        function grabUserWorstCategory() {
            var worst;
            users.doc(userId).get().then(function(doc) {
                worst = doc.data().worstCategory;
                console.log(worst);
            })
            return worst;
        }
        
        var worstCat = grabUserWorstCategory();
        console.log(worstCat);

        incentives.where("type", "==", grabUserWorstCategory)
        .limit(1)
        .get()
        .then(function(snap) {
            snap.forEach(function(doc) {
                var desc = doc.data().desc;
                    var org = doc.data().org;
                    var linkURL = doc.data().url;
                    var image = doc.data().image;
                    console.log(desc + ", " + org + ", " + linkURL);
                    console.log(image);

                    $(".card-title").append(org);
                    $(".card-text").append(desc);
                    $("#type-picture").attr("src", ("../img/" + image));
                    $("#incentive_url").attr("href", linkURL);
            })
        })
    })
});
// .update() function to update a doc on Firebase
// .set.merge()