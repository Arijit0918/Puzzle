let score = 5;
let hints = ["You should probably get to know me", "Is there any place in this website where you can know about me?"];
let hintButton = document.getElementById("hintButton");
let hintIndex = 0;
let hint = document.getElementById("hintSection");

function checkAnswer(answer,nextPage) {
    if(answer.trim().toLowerCase() ==="devil lies in the details"){
        
        setTimeout(function() { window.location.href = nextPage; }, 2000);
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
