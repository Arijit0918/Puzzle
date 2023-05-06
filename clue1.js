// Define the score and the maximum number of hints
var score = 10;
var maxHints = 2;

var previousHints = [];
// Function to check the user's answer
function checkAnswer(answer, correctAnswer) {
  // If the answer is correct, redirect to the next page
  if (answer === '10') {
    document.getElementById("result").innerHTML = "Well done! You've solved the clue.";
    setTimeout(function() { window.location.href = "clue2.html"; }, 2000);
  } else if(answer === '2'){
    window.location.href = "deadEnd.html";
  } 
  else {
    // If the answer is incorrect, deduct one point and display a message
    score -= 1;
   
    if(score==0){
        alert("You have used all your attempts. Better luck next time");
        window.location.href = "index.html";
      }
    document.getElementById("result").innerHTML = "Sorry, that's incorrect. Please try again.";
    document.getElementById("score").innerHTML = "Score: " + score;
  }
}

    function openAboutPage() {
      window.open("about.html");
    }
// Function to show a hint
function showHint(hintText) {
  // If the user has already used the maximum number of hints, display an error message
  if (maxHints === 0) {
    document.getElementById("result").innerHTML +="<br>" + "You have no more hints!";
  } else {
    // Otherwise, deduct one point, display the hint, and decrement the number of available hints
    score -= 1;
    score--;
    if(score==0){
        alert("You have used all your attempts. Better luck next time");
        window.location.href = "index.html";
      }
    document.getElementById("score").innerHTML = "Score: " + score;
    if(maxHints === 2){
    document.getElementById("result").innerHTML +="<br>" + "The numbers may not be in decimal";
    }
    else{
    document.getElementById("result").innerHTML +="<br>" + " Add numbers in binary number format";
    }
    maxHints -= 1;
  }
}
