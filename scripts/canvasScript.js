$(document).ready(function () {

    // let userDoc = firebase.auth().currentUser.uid;
        
    // let docRef = db.collection("users").doc(userDoc).collection("calculations")
    // .orderBy("time", "desc").limit(1);
    

    var chart = new CanvasJS.Chart("userChart", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: false,
        animationEnabled: true,
        backgroundColor: "transparent",
        title: {
            text: "Your Footprint",
            padding: 5,
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            dataPoints: [
                { y: 55.08, label: "Transport" },
                { y: 30.02, label: "Home" },
                { y: 14.00, label: "Food" },
            ]
        }]
    });
    chart.render();
});