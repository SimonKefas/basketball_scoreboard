let homeScoreElement = document.getElementById("homeScore");
let guestScoreElement = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;

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
}