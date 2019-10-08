const turns=3; 
const rounds=5;

const computerNumber = Math.floor(Math.random() * 10) +1;
const numberGuessed = document.getElementById("userGuess").value;

function enterGuess() {

  let userGuess = document.getElementById("userGuess").value;
  if(userGuess > randomNumber) {
  	result.innerHTML ='Too High! Try Again!';
    document.getElementById("submit").clear();
  }
  else if(userGuess < randomNumber) {
  	result.innerHTML ='Too Low! Try Again!';
    document.getElementById("submit").clear();
  }
  else if(userGuess == randomNumber) {
  	result.innerHTML ='You Got It Right!!';
    document.getElementById("submit").clear();

  }
