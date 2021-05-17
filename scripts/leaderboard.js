let scores = [
    {name: "Player 1", score: 300},
    {name: "Player 2", score: 370},
    {name: "Player 3", score: 500},
    {name: "Player 4", score: 430},
    {name: "Player 5", score: 340},
    {name: "Player 6", score: 340},
    {name: "Player 7", score: 340},
    {name: "Player 8", score: 340},
    {name: "Player 9", score: 340},
    {name: "Player 10", score: 340},
    {name: "Player 11", score: 340},
    {name: "Player 12", score: 340},
    {name: "Player 13", score: 340},
    {name: "Player 14", score: 340},
    {name: "Player 15", score: 340},
    {name: "Player 16", score: 340},
    {name: "Player 17", score: 340},
    {name: "Player 18", score: 340},

];

function updateLeaderboardView() {
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
}

updateLeaderboardView();
function randomize() {
    for(var i=0; i<scores.length; i++) {
        scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    }
    console.log("Here")
    // when your data changes, call updateLeaderboardView
    updateLeaderboardView();
}
