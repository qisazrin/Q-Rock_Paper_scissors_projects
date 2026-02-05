//SCORE VARIABLES
let userScore = 0;
let compScore = 0;

// USER CLICK FUNCTION
function clicktoattack(userChoice) {
    const compChoice = generateattack();
    const result = logicmapping(userChoice.toLowerCase(), compChoice);

    //choices and result
    document.getElementById("user-choice").innerHTML =
        `User choice: ${userChoice}`;

    document.getElementById("comp-choice").innerHTML =
        `Computer choice: ${compChoice}`;

    document.getElementById("result").innerHTML =
        `Result: ${result.toUpperCase()}`;

    calculatescore(result);
}

// RANDOM COMPUTER CHOICE
function generateattack() {
    const weapons = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * weapons.length);
    return weapons[index];
}

// MAPPING GAME LOGIC
function logicmapping(user, comp) {
    const mappingchoices = {
        rock: {
         rock: "draw",
         paper: "lose", 
         scissors: "win" },

        paper: {
         rock: "win", 
         paper: "draw",
         scissors: "lose" },

        scissors: {
         rock: "lose", 
         paper: "win", 
         scissors: "draw" }
    };
    return mappingchoices[user][comp];
}

// UPDATE SCOREBOARD
function calculatescore(result) {
    if (result === "win") userScore++;
    else if (result === "lose") compScore++;

    //scores 
    document.getElementById("user-score").innerHTML =
        `User score: ${userScore}`;

    document.getElementById("comp-score").innerHTML =
        `Computer score: ${compScore}`;
}

function resetGame() {
    // Reset scores
    userScore = 0;
    compScore = 0;

    // Reset scoreboard
    document.getElementById("user-score").innerHTML = `User score: ${userScore}`;
    document.getElementById("comp-score").innerHTML = `Computer score: ${compScore}`;

    // Reset choices and result
    document.getElementById("user-choice").innerHTML = `User choice: -`;
    document.getElementById("comp-choice").innerHTML = `Computer choice: -`;
    document.getElementById("result").innerHTML = `Result: -`;
}
