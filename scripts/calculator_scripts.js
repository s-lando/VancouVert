$(document).ready(function () {

    // let userDoc = firebase.auth().currentUser.uid;

    // let docRef = db.collection("users").doc(userDoc).collection("calculations")
    // .orderBy("time", "desc").limit(1);

    function renderPieChart() {

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
                dataPoints: [{
                        y: 55.08,
                        label: "Transport"
                    },
                    {
                        y: 30.02,
                        label: "Home"
                    },
                    {
                        y: 14.00,
                        label: "Food"
                    },
                ]
            }]
        });
        chart.render();
    }

    renderPieChart();

    //Read user data functions:
    //Read user data functions:

    function grabUserWorstCategory() {
        var worst;
        let users = db.collection('users');
        let userDoc = firebase.auth().currentUser.uid;
        users.doc(userId).get().then(function (doc) {
            worst = doc.data().worstCategory;
            console.log(worst);
        })
        return worst;
    }

    function grabCurrentFootprint() {
        var footprint;
        let users = db.collection('users');
        let userDoc = firebase.auth().currentUser.uid;
        users.doc(userDoc).get().then((doc) => {

            footprint = doc.data().currentFootprint.toFixed(2)
            $("#currentUserNumber").html(footprint);
        })

    }

    //Calculate functions for each category:
    //Calculate functions for each category:

    function calculateHome(array) {

        let emissions = 0;
        let multiplier = 1;
        let divider = 1;

        if (array[0].value == "detachedHome") {

            multiplier = 3;
        }

        divider = array[1].value;

        emissions = .15 * array[2].value;

        if (array[2].value == "electric") {
            emissions += .41;
        } else {
            emissions += 1.59;
        }

        emissions = emissions * multiplier;
        emissions = emissions / divider;

        return emissions;

    };

    function calculateTransport(array) {

        let emissions = 0;

        switch (array[0].value) {

            case "gasCar":
                emissions = 3.61;
                break;

            case "gasTruck":
                emissions = 4.75;
                break;

            case "ev":
                emissions = .19;
                break;

            case "publicTransit":
                emissions = 1.01;
                break;

            case "nonMotor":
                break;
        }

        emissions = emissions + array[1].value * .08;

        return emissions;
    }

    function calculateFood(array) {

        let emissions = 1.31;

        if (array[0].value == "yes") {
            return emissions;
        }

        switch (array[1].value) {

            case "daily":
                emissions += .88;
                break;

            case "sometimes":
                emissions += .31;
                break;

            case "never":
                emissions += .03;
                break;
        }

        switch (array[2].value) {

            case "daily":
                emissions += .45;
                break;

            case "sometimes":
                emissions += .11;
                break;

            case "never":
                emissions += .01;
                break;
        }

        return emissions;
    }


    //Displays food follow ups if user answers not veg

    $("#answerFirst").hide();
    $("#food-follow-up").hide();

    $('#foodForm').change(function () {
        let answer = $("input[name='veg-question']:checked").val();

        if (answer == "no") {

            $('#food-follow-up').slideDown("fast");
        } else {
            $("#food-follow-up").hide("fast");
        }
    });

    //writes calculations to database upon clicking calculate

    $("#calculateButton").click(function () {

        if (!$("#homeButton").hasClass("active") || !$("#transportButton").hasClass("active") || !$("#foodButton").hasClass("active")) {

            $("#answerFirst").show("slow");
        } else {
            $("#answerFirst").hide("slow");

            var homeData = $("#homeForm").serializeArray();

            var transportData = $("#transportForm").serializeArray();

            var foodData = $("#foodForm").serializeArray();

            let userID = firebase.auth().currentUser.uid;

            let scoreHome = calculateHome(homeData);
            let scoreTransport = calculateTransport(transportData);
            let scoreFood = calculateFood(foodData);

            let totalScore = scoreHome + scoreTransport + scoreFood;
            let worst;

            if (scoreHome >= scoreTransport && scoreHome >= scoreFood) {
                worst = "home";
            } else if (scoreTransport >= scoreHome && scoreTransport >= scoreFood) {
                worst = "transport";
            } else {
                worst = "food";
            }

            let timestamp = firebase.firestore.FieldValue.serverTimestamp();

            let users = db.collection('users');
            let userDoc = firebase.auth().currentUser.uid;

            users.doc(userDoc).collection('calculations').add({


                home: scoreHome,
                transport: scoreTransport,
                food: scoreFood,
                totalFootprint: totalScore,
                time: timestamp

            }).then(() => {
                console.log("calculation added");

                return true;
            });

            users.doc(userDoc).update({

                worstCategory: worst,
                currentFootprint: totalScore

            }).then(() => {
                console.log("footprint updates completed");
                let overviewTab = $("#overview-tab");
                overviewTab.trigger('click');
                grabCurrentFootprint();
                //update charts
            });
        }

    });
    // db.collection('users').doc('templateUser').collection('calculations').add({
    // date =  ,
    // home = ,

    //Below was originally used for submitted categories individually, not yet implemented.  Now only used to change button state upon submit for each category.

    $(".submit").click(function () {

        var formData = $(this).closest("form").serializeArray();

        //    let score;
        //    let userID = firebase.auth().currentUser.uid;

        console.log(formData);

        switch (formData[0].name) {

            case "veg-question":
                // score = calculateFood(formData);
                // console.log(score);
                $("#foodButton").addClass("active");

                break;

            case "houseType":
                // score = calculateHome(formData);
                // console.log(score);
                $("#homeButton").addClass("active");

                break;

            case "vehicleType":
                // score = calculateTransport(formData);
                // console.log(score);
                $("#transportButton").addClass("active");

                break;
        }

        // return score;
    });



});