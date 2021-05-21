$(document).ready(function(){

    function grabUserWorstCategory() {
        var worst;
        users.doc(userId).get().then(function(doc) {
            worst = doc.data().worstCategory;
            console.log(worst);
        })
        return worst;
    }

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

        switch(array[0].value) {

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

        switch(array[1].value) {

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

        switch(array[2].value) {

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

    $("#food-follow-up").hide();

    $('#food-form').change(function(){
        let answer = $("input[name='veg-question']:checked").val();
        
        if (answer == "no") {

            $('#food-follow-up').slideDown("fast");
        }

        else {
            $("#food-follow-up").hide("fast");
        }
    });

    //writes calculations to database

    
    $("#calculateButton").click(function () {

        var homeData = $("#homeForm").serializeArray();

        var transportData = $("#transportForm").serializeArray();

        var foodData = $("#foodForm").serializeArray();

        let userID = firebase.auth().currentUser.uid;

        let scoreHome = calculateHome(homeData);
        let scoreTransport = calculateTransport(transportData);
        let scoreFood = calculateFood(foodData);

        let totalScore = scoreHome + scoreTransport + scoreFood;
        let worst;

        if(scoreHome >=scoreTransport && scoreHome >= scoreFood) {
            worst = "home";
        }
        else if (scoreTransport >= scoreHome && scoreTransport >= scoreFood) {
            worst = "transport";
        }
        else {
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
        });




        // db.collection('users').doc('templateUser').collection('calculations').add({
            // date =  ,
            // home = ,




            //Below is used for submitted categories individually, not yet implemented

    // $(".submit").click(function () {

    //    var formData = $(this).closest("form").serializeArray();

    //    let score;
    //    let userID = firebase.auth().currentUser.uid;

    //     console.log(formData);

    //     switch(formData[0].name) {

    //         case "veg-question":
    //             score = calculateFood(formData);
    //             console.log(score);
    //             $("#foodButton").addClass("active");
                
    //             break;
            
    //         case "houseType":
    //             score = calculateHome(formData);
    //             console.log(score);
    //             $("#homeButton").addClass("active");

    //             break;

    //         case "vehicleType":
    //             score = calculateTransport(formData);
    //             console.log(score);
    //             $("#transportButton").addClass("active");

    //             break;
    //     }
        
    //     return score;



    });

});
