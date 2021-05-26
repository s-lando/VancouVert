
// var firebaseConfig = {
//     apiKey: "AIzaSyD5GLLJGTSl7Cj2c-Y4sR0RR731rHX4yQc",
//     authDomain: "vancouvert-dce8f.firebaseapp.com",
//     projectId: "vancouvert-dce8f",
//     storageBucket: "vancouvert-dce8f.appspot.com",
//     messagingSenderId: "546507154756",
//     appId: "1:546507154756:web:ff09f3b43494ac1bfc6311"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true});

let scores = [{userName : "harleen1", userID : "1", group: "abcd", day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harleen1", userID : "1", group: "abcd", day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harlee2n", userID : "4", group: "abcd", day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harleen", userID : "4", group: "abcd",  day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harleensdf", userID : "5", group: "abcd",  day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harleensdf", userID : "5", group: "abcd",  day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harleensdf", userID : "5", group: "abcd",  day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harleensdf", userID : "5", group: "abcd", day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harleensdf", userID : "5", group: "abcd", day : "1", month : "1", year:"2020", emission:"20"},
                    {userName : "harleensdf", userID : "5", group: "abcd", day : "1", month : "1", year:"2020", emission:"20"},];

// let usersInGroup = [];

function updateLeaderboardView() {
    let records = [];
    // Get the values from database
    
    db.collection('users').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            // console.log(doc.data())
            records.push({userName : doc.data().name,
                        userID : doc.id,
                        emission : doc.data().currentFootprint});
        })
    
    // Process the data to be in the form of {name: "name", emission: "234"}.
    let uniqueIndivisuals = new Map();
    for(let i=0; i<records.length ;i++){
        // console.log(records[i]);
        if(uniqueIndivisuals.has(records[i].userID)){
            uniqueIndivisuals.set(records[i].userID, 
                                    [records[i].userName, 
                                        parseInt(records[i].emission) + 
                                        parseInt(uniqueIndivisuals.get(records[i].userID)[1])]);
        }else{
            uniqueIndivisuals.set(records[i].userID, 
                [records[i].userName, parseInt(records[i].emission)]);
        }
    }

    let scores = [];
    uniqueIndivisuals.forEach((values, key) => {
        scores.push({
            name : values[0],
            score : values[1],
        });
    });

    // console.log(scores)
    //$("<div id='table-lead'></div>").appendTo("#leaderboard_ranks");
    let leaderboard = document.getElementById("leaderboard_ranks");
    // leaderboard.innerHTML = "";

    scores.sort(function(a, b){ return - b.score + a.score  });
    let elements = []; // we'll need created elements to update colors later on
    // create elements for each player
    for(let i=0; i<scores.length; i++) {
        let name = document.createElement("div");
        let score = document.createElement("div");
        name.className = "name_bar";
        // name.innerText = i+1 + ". " + scores[i].name;
        name.innerText = i+1 + ". " + scores[i].name + " " + scores[i].score;
        score.innerText = scores[i].score;
        let scoreRow = document.createElement("div");
        scoreRow.classList.add("lboard_mem");
        scoreRow.appendChild(name);
        // scoreRow.appendChild(score);
        leaderboard.appendChild(scoreRow);
        elements.push(scoreRow);
    }
    })
}

let uniqueIndivisuals = new Map();

function getUniquePlayers(value){
    console.log(value)
    if(uniqueIndivisuals.has(records[i].userID)){
        uniqueIndivisuals.set(records[i].userID, 
                                [records[i].userName, 
                                    parseInt(records[i].emission) + 
                                    parseInt(uniqueIndivisuals.get(records[i].userID)[1])]);
    }else{
        uniqueIndivisuals.set(records[i].userID, 
            [records[i].userName, parseInt(records[i].emission)]);
    }
}

function updateLeaderboardViewGroup(records_1) {
    // records_1.push({   userID: "S.No",
    //     userName : "Name",
    //     emission : "FootPrint"
    // })
    // console.log(records_1)
    // let records = [];
    // // // Get the values from database
    
    
    // db.collection('carbon_data').get().then((snapshot) => {
    //     snapshot.docs.forEach(doc => {
    //         // console.log(doc.data())
    //         records.push({userName : doc.data().group,
    //                     userID : doc.data().group,
    //                     // group : doc.data().group,
    //                     day : doc.data().day,
    //                     month : doc.data().month,
    //                     year : doc.data().year,
    //                     emission : doc.data().emission});
    //     })
    //     console.log(records)
    // })
    
    // console.log("records: ", records);
    // records = userIDToEmission;
    // records = scores;
    // records = userIDToEmission;
    // Process the data to be in the form of {name: "name", emission: "234"}.
    // let uniqueIndivisuals = new Map();
    // for(let i=0; i<records.length ;i++){
    // records.forEach()
    //     console.log(records[i]);
    //     if(uniqueIndivisuals.has(records[i].userID)){
    //         uniqueIndivisuals.set(records[i].userID, 
    //                                 [records[i].userName, 
    //                                     parseInt(records[i].emission) + 
    //                                     parseInt(uniqueIndivisuals.get(records[i].userID)[1])]);
    //     }else{
    //         uniqueIndivisuals.set(records[i].userID, 
    //             [records[i].userName, parseInt(records[i].emission)]);
    //     }
    // }

    // console.log(records_1)
    let uniqueIndivisuals = new Map();
    records_1.forEach((value) => {
        console.log(value)
        if(uniqueIndivisuals.has(value.userID)){
            uniqueIndivisuals.set(value.userID, 
                                    [value.userName, 
                                        parseInt(value.emission) + 
                                        parseInt(uniqueIndivisuals.get(value.userID)[1])]);
        }else{
            uniqueIndivisuals.set(value.userID, 
                [value.userName, parseInt(value.emission)]);
        }
    })
    // console.log("uniqueIndivisuals : ", uniqueIndivisuals)
    let scores = [];
    uniqueIndivisuals.forEach((values, key) => {
        scores.push({
            name : values[0],
            score : values[1],
        });
    });

    console.log(scores);

    //     // console.log(scores)
    let leaderboard = document.getElementById("leaderboard_ranks");
    // leaderboard.innerHTML = "";

    scores.sort(function(a, b){ return  - b.score + a.score  });
    let elements = []; // we'll need created elements to update colors later on
    // create elements for each player
    for(let i=0; i<scores.length; i++) {
        let name = document.createElement("div");
        let score = document.createElement("div");
        name.className = "name_bar";
        name.innerText = i+1 + ". " + scores[i].name + " " + scores[i].score;
        score.innerText = scores[i].score;
        let scoreRow = document.createElement("div");
        scoreRow.classList.add("lboard_mem");
        scoreRow.appendChild(name);
        // scoreRow.appendChild(score);
        leaderboard.appendChild(scoreRow);
        elements.push(scoreRow);
    }
}

function report1(groupName){
    let usersInGroup = [];
    userIDToEmission = [];

    db.collection('groups/').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            if(doc.data().name == groupName){
                let M = doc.data().members // .forEach(getUserData);
                M.forEach((value) => {
                    db.collection('users/').doc(value).get().then((doc) => {
                        userIDToEmission.push({
                            userID: value,
                            userName : doc.data().name,
                            emission : doc.data().currentFootprint
                        })
                    })
                });
            }
        })
        console.log(userIDToEmission)
        let uniqueIndivisuals = new Map();
        userIDToEmission.forEach((value) => {
            console.log(value)
            if(uniqueIndivisuals.has(value.userID)){
                uniqueIndivisuals.set(value.userID, 
                                        [value.userName, 
                                            parseInt(value.emission) + 
                                            parseInt(uniqueIndivisuals.get(value.userID)[1])]);
            }else{
                uniqueIndivisuals.set(value.userID, 
                    [value.userName, parseInt(value.emission)]);
            }
        })
        console.log(userIDToEmission)
        // updateLeaderboardViewGroup(userIDToEmission);
    });
}

function report(groupName){
    $("#leaderboard_ranks").empty();
    if(groupName == "All Users"){
        updateLeaderboardView();
        return
    }
    let usersInGroup = [];
    db.collection('users/').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            let M = doc.data().groups
            // console.log(M)
            M.forEach((value) => {
                // console.log(doc.data().name, value, groupName)
                if(new String(value).valueOf() == new String(groupName).valueOf()){
                    // console.log("Here")
                    usersInGroup.push({
                        userName : doc.data().name,
                        userID : doc.id,
                        emission : doc.data().currentFootprint
                    })
                }
            })
            
        })
        // console.log(usersInGroup)
        updateLeaderboardViewGroup(usersInGroup);
    })
}
// let userIDToEmission = [];
// function getUserData(userID_indivisual){
//     // console.log(userID_indivisual)
//     let userIDToEmission = [];
//     db.collection('users/'+userID_indivisual+'/calculations').get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {
//             userIDToEmission.push({
//                 userID : userID_indivisual,
//                 emission : doc.data().food + doc.data().transport + doc.data().home
//             })
//         })
//         updateLeaderboardViewGroup(userIDToEmission);
//     })
// }

let userIDToEmission = [{userID: "S.No",
    userName : "Name",
    emission : "FootPrint"}];
function getUserData(userID_indivisual){
    db.collection('users/').doc(userID_indivisual).get().then((doc) => {
        userIDToEmission.push({
            userID: userID_indivisual,
            userName : doc.data().name,
            emission : doc.data().currentFootprint
        });
    })
}

// test()

function addList(){
    let groups = [];
    db.collection('groups').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
           groups.push(doc.data().name);
        })

        var select = document.getElementById("groups");
        var option = document.createElement('option');
        option.text = option.value = "All Users";
        select.add(option, 0);
        for(var i = 0; i<groups.length; i++){
            var option = document.createElement('option');
            option.text = option.value = groups[i];
            select.add(option, 1);
        }
        updateLeaderboardView();
    });
    // var select = document.getElementById("year");
    // for(var i = 2011; i >= 1900; --i) {
    //     var option = document.createElement('option');
    //     option.text = option.value = i;
    //     select.add(option, 0);
    // }
}

addList();
// updateLeaderboardView();
function randomize() {
    // This is a function that is written just to check the JS code without connection to  database.
    for(var i=0; i<scores.length; i++) {
        scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    }
    // update the leaderboard HTML page.
    updateLeaderboardView();
}
