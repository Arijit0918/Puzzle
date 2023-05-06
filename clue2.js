let score = 5;
let hints = ["When does September ends?", "Can you end September?", "Try changing the date on your machine."];
let hintButton = document.getElementById("hintButton");
let hintIndex = 0;
let hint = document.getElementById("hintSection");
let submitButton =document.getElementById("submit")

function checkDate() {
let date = new Date();
console.log(date.getMonth());
console.log(date.getDate());
if (date.getMonth() === 9 && date.getDate() === 1) {
    // Redirect to the next page
    document.getElementById("hiddensection").innerHTML = "Well done! You've solved the clue.";
    setTimeout(function() { window.location.href = "clue3.html"; }, 2000);
    
  }
  
};

hintButton.addEventListener("click", function() {
  if (hintIndex < hints.length) {
    hint.innerHTML += "<br>" + hints[hintIndex];
    hintIndex++;
    score--;
    document.getElementById("score").innerHTML = "Score: " + score;
  }
});
