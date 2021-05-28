const groups = db.collection("groups");
const users = db.collection("users");

// -------------------------------------------- JOIN GROUP -------------------------------------------//

// Button for joining a group
$(document).ready(function () {
    $("#join-group").click(function () {
        //get the string value from input field
        var groupName = document.getElementById("floatingInput").value;
        console.log(groupName);
        joinGroup(groupName);
    })
})

function joinGroup(groupName) {
    var groups = db.collection("groups").doc(groupName);

    groups.get()
    .then((docSnapshot) => {
        if (!docSnapshot.exists) {
            console.log("This group doesn't exist!");
                
                db.collection("groups").doc(groupName).set({
                    name: groupName,
                    members: []
                })
        }

        addMemberToGroup(groupName);
        addGroupToUsersList(groupName);
    })
}

// Add the user to the group collection  (affects GROUPS collection)
function addMemberToGroup(nameGroup) {
    firebase.auth().onAuthStateChanged((user) => {

        db.collection("groups")
            .doc(nameGroup)
            .update({
                members: firebase.firestore.FieldValue.arrayUnion(user.uid)
            })
    })
}

// Also, add the group to the list of groups the user is a part of (affects USERS collection)
function addGroupToUsersList(nameGroup) {

    firebase.auth().onAuthStateChanged((user) => {
        users.doc(user.uid).update({
            groups: firebase.firestore.FieldValue.arrayUnion(nameGroup)
        })
    })
}

// -------------------------------------------- DELETE GROUP -------------------------------------------//

// Button for deleting a group
$(document).ready(function () {
    $("#delete-group-btn").click(function () {
        var groupName = document.getElementById("floatingInput2").value;
        console.log(groupName);
        deleteUserFromGroup(groupName);
    })
})

// Deletes the group from database
function deleteUserFromGroup(groupName) {
    var groups = db.collection("groups").doc(groupName);

    firebase.auth().onAuthStateChanged((user) => {
        // update the GROUPS collection to remove the user from members
        groups.update({
            members: firebase.firestore.FieldValue.arrayRemove(user.uid)
        })

        // update the USERS collection to remove the group from attribute
        users.doc(user.uid).update({
            groups: firebase.firestore.FieldValue.arrayRemove(groupName)
        })
    })
}


// Create dummy "user" documents to test out other features
function addUserAndCalc() {

    firebase.auth().onAuthStateChanged((user) => {
        users.doc(user.uid).set({

            name: "Madhav Ramdev",
            email: "madhav@hotmail.com",
            worstCategory: "food",
            currentFootprint: 0,
            groups: ["Avengers", "Bollywood"]
        }).then(() => {

            console.log("New user added to firestore");
            console.log(user.uid)

        });

        let homeScore = 43;
        let transportScore = 18;
        let foodScore = 73;
        let total = homeScore + transportScore + foodScore;
        let timestamp = firebase.firestore.FieldValue.serverTimestamp();


        users.doc(user.uid).collection('calculations').add({

            home: homeScore,
            transport: transportScore,
            food: foodScore,
            totalFootprint: total,
            time: timestamp
        }).then(() => {
            console.log("calculation added");

            return true;
        });
    })

}

//addUserAndCalc();