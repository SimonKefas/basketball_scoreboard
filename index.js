let homeScoreElement = document.getElementById("homeScore");
let guestScoreElement = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;

function checkLeadingTeam() {
    if (homeScore > guestScore) {
        guestScoreElement.classList.remove("current-leader");
        homeScoreElement.classList.add("current-leader");
    } else if (guestScore > homeScore) {
        homeScoreElement.classList.remove("current-leader");
        guestScoreElement.classList.add("current-leader");
    } else if (homeScore === guestScore) {
        homeScoreElement.classList.remove("current-leader");
        guestScoreElement.classList.remove("current-leader");
    } else {
        console.log("Not currently any leading teams..");
    }
}

function gameCounter(number, scoreName) {
    if (scoreName === 'guest') {
        guestScore += number;
        guestScoreElement.textContent = guestScore;
    } else if (scoreName === 'home') {
        homeScore += number;
        homeScoreElement.textContent = homeScore;
    } else {
        console.error("Something wrong happened!")
    }
    checkLeadingTeam()
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;
}