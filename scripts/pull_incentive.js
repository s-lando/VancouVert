$(document).ready(function () {

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

            $(".card-title").append(org);
            $(".card-text").append(desc);
            $("#type-picture").attr("src", ("../img/" + image));
            $("#incentive_url").attr("href", linkURL);
        })
    })
}
        /* if (user) {
            console.log(user.uid);
        }

        let userId = user.uid;

        function grabUserWorstCategory() {
            
            incentives.where("type", "==", users.doc(userId).get()
            .then(function (doc) {
                worst = doc.data().worstCategory;
                console.log(worst);
            }).limit(1).get()
            .then(function(snap) {
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
            }))
        } */

        /* function grabUserWorstCategory() {
            var worst;
            users.doc(userId).get().then(function (doc) {
                worst = doc.data().worstCategory;
                console.log(worst);
            }).then(incentives.where("type", "==", worst)
                .limit(1)
                .get().then(function (snap) {
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
                }))
        } */


        /* function getIncentiveForUser() {
            let worstCategory = grabUserWorstCategory();
            console.log(worstCategory);
            incentives.where("type", "==", worstCategory)
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
        } 
    }) */