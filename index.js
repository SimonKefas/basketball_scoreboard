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

let gameResultElement = document.getElementById("game-result");
let winnerAnnouncementElement = document.getElementById("winner-announcement");

function checkLeadingTeam() {
    if (homeScore > guestScore) {
        guestScoreElement.classList.remove("current-leader");
        homeScoreElement.classList.add("current-leader");
    } else if (guestScore > homeScore) {
        homeScoreElement.classList.remove("current-leader");
        guestScoreElement.classList.add("current-leader");
    } else {
        homeScoreElement.classList.remove("current-leader");
        guestScoreElement.classList.remove("current-leader");
    }
}

function gameCounter(points, team) {
    if (team === 'home') {
        homeScore = Math.max(0, homeScore + points);
        homeScoreElement.textContent = homeScore;
    } else if (team === 'guest') {
        guestScore = Math.max(0, guestScore + points);
        guestScoreElement.textContent = guestScore;
    }
    checkLeadingTeam();
}

function foulCalculate(foulPoints, team) {
    if (team === 'home') {
        foulsHome = Math.max(0, foulsHome + foulPoints);
        document.getElementById('foul-counter-home').textContent = foulsHome;
    } else if (team === 'guest') {
        foulsGuest = Math.max(0, foulsGuest + foulPoints);
        document.getElementById('foul-counter-guest').textContent = foulsGuest;
    }
}

function periodCalculate(change) {
    period = Math.max(1, period + change);
    updatePeriodDisplay();
}

function updatePeriodDisplay() {
    const periodCounter = document.getElementById('period-counter');
    const periodText = period === 1 ? 'First period' :
                       period === 2 ? 'Second period' :
                       period === 3 ? 'Third period' :
                       period === 4 ? 'Fourth period' :
                       `Overtime ${period - 4}`;
    periodCounter.textContent = periodText;
}

function endGame() {
    let winner;
    if (homeScore > guestScore) {
        winner = "Home";
    } else if (guestScore > homeScore) {
        winner = "Guest";
    } else {
        winner = "It's a tie";
    }

    winnerAnnouncementElement.textContent = `Game Over! ${winner} wins!`;
    gameResultElement.classList.remove("hidden");

    // Disable all buttons except "New Game"
    const buttons = document.querySelectorAll('button:not([onclick="newGame()"])');
    buttons.forEach(button => button.disabled = true);
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
    updatePeriodDisplay();

    checkLeadingTeam();

    // Re-enable all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = false);

    // Hide game result
    gameResultElement.classList.add("hidden");
}
