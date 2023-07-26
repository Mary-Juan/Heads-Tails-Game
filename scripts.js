const buttons = document.querySelectorAll('button');
const coinArray = ["Heads", "Tails"];
let scors = [0, 0];
var winner = document.getElementById('winner');
var computerGuessResult = document.getElementById('computerGuessResult');
var playerGuessResult = document.getElementById('playerGuessResult');
var computerScore = document.getElementById('computerScore');
var playerScore = document.getElementById('playerScore');
var font = 20;

for (var i = 0; i <= buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
    var playerGuess = e.target.innerText;
    var computerToss = Math.floor(Math.random() * 2);
    var computerGuess = coinArray[computerToss];
    computerGuessResult.innerHTML = computerGuess;
    playerGuessResult.innerHTML = playerGuess;

    if (playerGuess === computerGuess) {
        winner.innerHTML = "you won";
        scors[0]++;
        playerScore.innerHTML = scors[0];
    } else {
        winner.innerHTML = "computer won"
        scors[1]++;
        computerScore.innerHTML = scors[1];
    }

}