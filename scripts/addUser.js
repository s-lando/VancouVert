function addUserAndCalc() {

    let users = db.collection('users');
    let userDoc = firebase.auth().currentUser.uid;

    users.doc(userDoc).set({

       // name: "value",
       // email: "value",
        worstCategory: "NA",
        currentFootprint: 0,
       // groups: ["value", "value"]
    }).then(() => {

        console.log("New user added to firestore");
        console.log(userDoc)

    });

    let homeScore = 0;
    let transportScore = 0;
    let foodScore = 0;
    let total = homeScore + transportScore + foodScore;
    let timestamp = firebase.firestore.FieldValue.serverTimestamp();


    users.doc(userDoc).collection('calculations').add({

        home: homeScore,
        transport: transportScore,
        food: foodScore,
        totalFootprint: total,
        time: timestamp
    }).then(() => { 
        console.log("calculation added");

        return true;
    });

}