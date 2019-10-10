const result = document.getElementById("UserHint")

let wins = 0;
let losses = 0;
let tries = 0;

const winsText = document.getElementById("wins-text");
const lossesText = document.getElementById("losses-text");
const triesText = document.getElementById("tries-text")

document.onkeyup = function (event) {

  let computerNumber = Math.floor(Math.random() * Math.floor(11));
  const userGuess = event.key;
  console.log(userGuess);
  console.log(computerNumber);


  if (userGuess > computerNumber) {
    losses++;
    result.innerHTML = 'Too High! Try Again!';
  } else if (userGuess < computerNumber) {
    losses++;
    result.innerHTML = 'Too Low! Try Again!';
  } if (userGuess == computerNumber) {
    wins++
    result.innerHTML = 'You Got It Right!!';
  }    
}

// --- I tried to set rounds in the game to 5, but the alert kept generating when I would open the webpage. --- //
//   let UserTries = setInterval(5);{
//   if (UserTries > 5);
//   alert("GAME OVER");
//   document.location.reload();
//   clearInterval(interval);
// }


  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  triesText.textContent = "tries: " + tries;




