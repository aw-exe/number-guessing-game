const turns=3; 
const rounds=5;

// random number selection in JS using Math.Floor//
const numberGuessed = document.getElementById("userGuess").value;

document.onkeyup = function(event) {
  
  let computerNumber = Math.floor(Math.random() * Math.floor(6));
  const userGuess = event.key;
  console.log(userGuess);
  console.log(computerNumber);

}

// function enterGuess() {

//   let userGuess = document.getElementById("userGuess").value;
//   if(userGuess > randomNumber) {
//   	result.innerHTML ='Too High! Try Again!';
//     document.getElementById("submit").clear();
//   }
//   else if(userGuess < randomNumber) {
//   	result.innerHTML ='Too Low! Try Again!';
//     document.getElementById("submit").clear();
//   }
//   else if(userGuess == randomNumber) {
//   	result.innerHTML ='You Got It Right!!';
//     document.getElementById("submit").clear();

//   }
