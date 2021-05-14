const incentives = db.collection("incentives");

/* function pickRandomIncentive() {
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

function getIncentiveByType() {
    document.getElementById("submit1").addEventListener('click', function () {
        var type = document.getElementById("submit1").value;
        console.log(type);

        //read a random incentives from firestore, based on the type
        incentives
            .where("type", "==", type)
            .limit(1)
            .get()
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
    })
}

// .update() function to update a doc on Firebase
// .set.merge()