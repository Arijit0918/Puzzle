let score = 5;
let hints = ["What could be these numbers?", "This may be a location", "Search this on map"];
let hintButton = document.getElementById("hintButton");
let hintIndex = 0;
let hint = document.getElementById("hintSection");

hintButton.addEventListener("click", function() {
  if (hintIndex < hints.length) {
    score--;
    if(score==0){
        alert("You have used all your attempts. Better luck next time");
        window.location.href = "index.html";
      }
    hint.innerHTML += "<br>" + hints[hintIndex];
    hintIndex++;
    
    document.getElementById("score").innerHTML = "Score: " + score;
  }
});



function checkAnswer(answer,wrongPage,rightPage) {
    if(answer.trim().toLowerCase() ==="disappointment"){
        document.getElementById("result").innerHTML = "Well done! You've solved the clue.";
        setTimeout(function() { window.location.href = rightPage; }, 2000);
      } else if(answer.trim().toLowerCase() ==="pacific ocean"){
        window.location.href = "deadEnd.html";
      }
      else{
        score -= 1;
        if(score==0){
            alert("You have used all your attempts. Better luck next time");
            window.location.href = "index.html";
          }
    document.getElementById("result").innerHTML = "Sorry, that's incorrect. Please try again.";
    document.getElementById("score").innerHTML = "Score: " + score;
      } 
    }




// submitButton.addEventListener("click", function() {
//   let useranswer = answer.value.trim().toLowerCase();
//   if (useranswer === "disappointment") {
//     window.location.replace = "clue5.html";
//   } else if (useranswer === "pacific ocean") {
//     window.location.replace = "deadEnd.html";
//   } else {
    
   
//     if(score ==0){
//         document.getElementById("wrongSection").innerHTML="Sorry, that is not the correct answer. Try again.";
//         window.location.href = "index.html";
//     }
//     score--;
//     document.getElementById("score").innerHTML = "Score: " + score;
//   }
// });
