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

var user = firebase.auth().currentUser;

//Animate
$('#Login').on('click', function () {
    const images = $('#images').position().top;

    $('html,body').animate({
        scrollTop: images
    }, 900);
});

function writeQuotes() {
    var quotesRef = db.collection("quotes");
    quotesRef.add({

        quote: "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful.",
        randomNum: 1
    });
    quotesRef.add({

        quote: " Forget not that the earth delights to feel your bare feet and the winds long to play with your hair.",
        randomNum: 2
    });
    quotesRef.add({

        quote: " Look deep into nature, and then you will understand everything better. —Albert Einstein",
        randomNum: 3
    });
    quotesRef.add({

        quote: "Heaven is under our feet as well as over our heads. —Henry David Thoreau",
        randomNum: 4
    });
    quotesRef.add({

        quote: "To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.",
        randomNum: 5
    });
    quotesRef.add({

        quote: "We don’t inherit the earth from our ancestors, we borrow it from our children.",
        randomNum: 6
    });
    quotesRef.add({

        quote: " I believe in God, only I spell it Nature.",
        randomNum: 7
    });
}
// writeQuotes();

function quotesQuery() {
    db.collection("quotes")
        .where("randomNum", "==", Math.floor(Math.random() * 7) + 1)
        .limit(1)
        .get()
        .then(function (abc) {
            abc.forEach(function (doc) {
                var q = doc.data().quote;
                var num = doc.data().randomNum;
                console.log(q);
                console.log(num);


                var neww = '<p><i> "' + q + '"</i><p>';
                $("#quotes-go-here").html(neww);

            })
        })
}



//Funtction for making the progress graph

function makeGraphs() {
    firebase.auth().onAuthStateChanged((user) => {
        var barList = [];
        var timeList = [];
        db.collection("users").doc(user.uid).collection("calculations")
            .orderBy("time", "desc")
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    barList[barList.length] = doc.data().totalFootprint;
                    timeList[timeList.length] = doc.data().time;
                })
                console.log(barList[barList.length - 1]);
                console.log(timeList[0]);


                var chart = new CanvasJS.Chart("chartContainer", {

                    title: {
                        text: "Total footprint progress"
                    },
                    data: [{
                        type: "line",

                        dataPoints: [{
                                x: new Date(2021, 05, 1),
                                y: barList[barList.length - 1]
                            },
                            {
                                x: new Date(2021, 05, 10),
                                y: barList[3]
                            },
                            {
                                x: new Date(2021, 05, 17),
                                y: barList[2]
                            },
                            {
                                x: new Date(2021, 05, 22),
                                y: barList[1]
                            },
                            {
                                x: new Date(2021, 05, 26),
                                y: barList[0]
                            },
                            // {
                            //     x: new Date(2012, 05, 1),
                            //     y: 500
                            // },
                            // {
                            //     x: new Date(2012, 06, 1),
                            //     y: 480
                            // },
                            // {
                            //     x: new Date(2012, 07, 1),
                            //     y: 480
                            // },
                            // {
                            //     x: new Date(2012, 08, 1),
                            //     y: 410
                            // },
                            // {
                            //     x: new Date(2012, 09, 1),
                            //     y: 500
                            // },
                            // {
                            //     x: new Date(2012, 10, 1),
                            //     y: 480
                            // },
                            // {
                            //     x: new Date(2012, 11, 1),
                            //     y: 510
                            // }
                        ]
                    }]
                });

                chart.render();
            })
    });

}
//loads on click of tab, then off
$('#history-tab').on("click", function () {
    makeGraphs();
    $('#history-tab').off();
});