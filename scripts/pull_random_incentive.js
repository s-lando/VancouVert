$(document).ready(function () {

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

        $('#submit1').click (function() {

            let type = "energy";
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
                    console.log(desc + ", " + org + ", " + linkURL);

                    $(".card-title").append(org);
                    $(".card-text").append(desc);
                    $("#incentive_url").attr("href", linkURL);
                })
            })
    })




        //read a random incentives from firestore, based on the type
});
// .update() function to update a doc on Firebase
// .set.merge()

