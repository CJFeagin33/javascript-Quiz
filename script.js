var highScoresButton = document.querySelector("#highScoresButton");
var returnToHomePageButton = document.querySelector("#backToHome-icon")




var visitHighScores = function() {
  var landingPage = document.getElementById("landing-page");
  console.log(landingPage)
  landingPage.style.display = "none";
  var highScoresPage = document.getElementById("HighScores-page");
  console.log(highScoresButton)
  highScoresPage.style.display = "inline";
  var returnHomeBtn = document.getElementById("backToHome-icon");
  returnHomeBtn.style.display = "inline";
}

var returnToHomePage = function() {
  window.location.reload();
}

highScoresButton.addEventListener("click", visitHighScores);
returnToHomePageButton.addEventListener("click", returnToHomePage);