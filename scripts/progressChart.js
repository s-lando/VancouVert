
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

                    // DateTime myDateTime = (snapshot.data.documents[index].data['timestamp']).toDate();

                    barList[barList.length] = doc.data().totalFootprint;
                    timeList[timeList.length] = doc.data().time.toDate;
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
                            text: "Your Progress"
                        },
                        data: [{
                            type: "line",

                            dataPoints: [{
                                    x: new Date(2021, 05, 20),
                                    y: barList[4]
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
                                    x: new Date(2021, 05, 12),
                                    y: barList[1]
                                },
                                {
                                    x: new Date(2021, 05, 22),
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