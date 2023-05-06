let score = 5;



function checkAnswer(answer,nextPage) {
  if(answer.trim().toLowerCase() ==="lawsuit"){
      
      setTimeout(function() { window.location.href = nextPage; }, 2000);
    } 
    else{
      score -= 1;
      if(score==0){
        document.getElementById("result").innerHTML ="You have used all your attempts. Better luck next time";
        window.location.href = "index.html";
      }
  document.getElementById("result").innerHTML = "Sorry, that's incorrect. Please try again.";
  document.getElementById("score").innerHTML = "Score: " + score;
    } 
  }
