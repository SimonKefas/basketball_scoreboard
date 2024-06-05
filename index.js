let homeScoreElement = document.getElementById("homeScore");
let guestScoreElement = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;

let foulCounterHome = document.getElementById("foul-counter-home");
let foulCounterGuest = document.getElementById("foul-counter-guest");

let periodCounter = document.getElementById("period-counter")

let foulsHome = 0;
let foulsGuest = 0;

let period = 1;

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
        console.error("Something wrong happened with the gameCounter function: " + error)
    }
    checkLeadingTeam()
}

function foulCalculate(number, scoreName) {
    if (scoreName === 'guest') {
        foulsGuest += number;
        foulCounterGuest.textContent = foulsGuest;
    } else if (scoreName === 'home') {
        foulsHome += number;
        foulCounterHome.textContent = foulsHome;
    } else {
        console.error("Something wrong happened with the foulCalculate function: " + error)
    }
}

function periodCalculate(number) {
    period += number;
    periodCounter.textContent = "Period: " + period;
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;

    foulsGuest = 0;
    foulsHome = 0;
    foulCounterGuest.textContent = foulsGuest;
    foulCounterHome.textContent = foulsHome;

    period = 1;
    periodCounter.textContent = "Period: " + period;

    checkLeadingTeam()
}