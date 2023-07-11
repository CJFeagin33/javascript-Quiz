var highScoresButton = document.querySelector("#highScoresButton");
var returnToHomePageButton = document.querySelector("#backToHome-icon")
var beginQuizButton = document.querySelector("#beginQuizButton")



var visitHighScores = function() {
  var landingPage = document.getElementById("landing-page");
  landingPage.style.display = "none";
  var highScoresPage = document.getElementById("HighScores-page");
  highScoresPage.style.display = "inline";
  var returnHomeBtn = document.getElementById("backToHome-icon");
  returnHomeBtn.style.display = "inline";
}

var returnToHomePage = function() {
  window.location.reload();
}

var question1Page = function() {
  var landingPage = document.getElementById("landing-page");
  landingPage.style.display = "none";
  var question1 = document.getElementById("question1-page")
  question1.style.display = "inline"
  var returnHomeBtn = document.getElementById("backToHome-icon");
  returnHomeBtn.style.display = "inline";
}

highScoresButton.addEventListener("click", visitHighScores);
returnToHomePageButton.addEventListener("click", returnToHomePage);
beginQuizButton.addEventListener("click", question1Page)