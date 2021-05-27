
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

                    var dd = new Date(doc.data().time.toDate().toLocaleDateString()) ;
                    barList[barList.length] = doc.data().totalFootprint;
                    timeList[timeList.length] = dd;
                })
                $("#calc-goes-here").text(barList[barList.length - 1]);
                console.log(barList[barList.length - 1]);
                console.log(timeList[0]);

                if (barList.length == 0) {

                    $("#chartContainer").html("");
                    $("#firstcalc").html("Please perform your first calculation in the calculation tab to see your progress!");

                } else {
                    var chart = new CanvasJS.Chart("chartContainer", {
                        animationEnabled: true,
                        backgroundColor: "transparent",
                        title: {
                            text: "Your Progress",
                            padding: 5,
                            size: 8,
                        },
                        data: [{
                            type: "line",

                            dataPoints: [{
                                    x: timeList[4],
                                    y: barList[4]
                                },
                                {
                                    x: timeList[3],
                                    y: barList[3]
                                },
                                {
                                    x: timeList[2],
                                    y: barList[2]
                                },
                                {
                                    x: timeList[1],
                                    y: barList[1]
                                },
                                {
                                    x: timeList[0],
                                    y: barList[0]
                                },
                               
                            ]
                        }]
                    });

                    chart.render();
                }
            })
    });

}
//loads on click of tab, then off
$('#history-tab').on("click", function () {
    makeGraphs();
    $('#history-tab').off();
});