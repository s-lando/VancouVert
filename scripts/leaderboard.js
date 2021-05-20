
var firebaseConfig = {
    apiKey: "AIzaSyD5GLLJGTSl7Cj2c-Y4sR0RR731rHX4yQc",
    authDomain: "vancouvert-dce8f.firebaseapp.com",
    projectId: "vancouvert-dce8f",
    storageBucket: "vancouvert-dce8f.appspot.com",
    messagingSenderId: "546507154756",
    appId: "1:546507154756:web:ff09f3b43494ac1bfc6311"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true});

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

function updateLeaderboardView() {
    let records = [];
    // Get the values from database
    
    
    db.collection('carbon_data').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
            records.push({userName : doc.data().userName,
                        userID : doc.data().userID,
                        day : doc.data().day,
                        month : doc.data().month,
                        year : doc.data().year,
                        emission : doc.data().emission});
        })
    
        
        // Process the data to be in the form of {name: "name", emission: "234"}.
        let uniqueIndivisuals = new Map();
        for(let i=0; i<records.length ;i++){
            console.log(records[i]);
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

        console.log(scores)
        let leaderboard = document.getElementById("leaderboard");
        leaderboard.innerHTML = "";

        scores.sort(function(a, b){ return b.score - a.score  });
        let elements = []; // we'll need created elements to update colors later on
        // create elements for each player
        for(let i=0; i<scores.length; i++) {
            let name = document.createElement("div");
            let score = document.createElement("div");
            name.className = "name_bar";
            name.innerText = i+1 + ". " + scores[i].name;
            score.innerText = scores[i].score;

            let scoreRow = document.createElement("div");
            scoreRow.classList.add("lboard_mem");
            scoreRow.appendChild(name);
            scoreRow.appendChild(score);
            leaderboard.appendChild(scoreRow);

            elements.push(scoreRow);

        }
    });
}

function updateLeaderboardViewGroup() {
    let records = [];
    // Get the values from database
    
    
    db.collection('carbon_data').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
            records.push({userName : doc.data().group,
                        userID : doc.data().group,
                        // group : doc.data().group,
                        day : doc.data().day,
                        month : doc.data().month,
                        year : doc.data().year,
                        emission : doc.data().emission});
        })
    
        
        // Process the data to be in the form of {name: "name", emission: "234"}.
        let uniqueIndivisuals = new Map();
        for(let i=0; i<records.length ;i++){
            console.log(records[i]);
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

        console.log(scores)
        let leaderboard = document.getElementById("leaderboard");
        leaderboard.innerHTML = "";

        scores.sort(function(a, b){ return b.score - a.score  });
        let elements = []; // we'll need created elements to update colors later on
        // create elements for each player
        for(let i=0; i<scores.length; i++) {
            let name = document.createElement("div");
            let score = document.createElement("div");
            name.className = "name_bar";
            name.innerText = i+1 + ". " + scores[i].name;
            score.innerText = scores[i].score;

            let scoreRow = document.createElement("div");
            scoreRow.classList.add("lboard_mem");
            scoreRow.appendChild(name);
            scoreRow.appendChild(score);
            leaderboard.appendChild(scoreRow);

            elements.push(scoreRow);

        }
    });
}

function report(groupName){
    let usersInGroup = [];
    db.collection('groups/'+usersInGroup).get().then((snapshot) => {
        

        var select = document.getElementById("groups");
        for(var i = 0; i<groups.length; i++){
            var option = document.createElement('option');
            option.text = option.value = groups[i];
            select.add(option, 0);
        }
    });
}

function addList(){
    let groups = [];
    db.collection('groups').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
           groups.push(doc.data().name);
        })

        var select = document.getElementById("groups");
        for(var i = 0; i<groups.length; i++){
            var option = document.createElement('option');
            option.text = option.value = groups[i];
            select.add(option, 0);
        }
    });
    // var select = document.getElementById("year");
    // for(var i = 2011; i >= 1900; --i) {
    //     var option = document.createElement('option');
    //     option.text = option.value = i;
    //     select.add(option, 0);
    // }
}

// addList();
// updateLeaderboardView();
function randomize() {
    // This is a function that is written just to check the JS code without connection to  database.
    for(var i=0; i<scores.length; i++) {
        scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    }
    // update the leaderboard HTML page.
    updateLeaderboardView();
}
