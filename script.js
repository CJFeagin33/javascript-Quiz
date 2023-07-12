// button variables (used in event listeners at the bottem)

var highScoresButton = document.querySelector("#highScoresButton");
var returnToHomePageButton = document.querySelector("#backToHome-icon");
var beginQuizButton = document.querySelector("#beginQuizButton");

// variable that contains the users initials
var userInitials = [];

// button variables used in questions-pages
var answer1 = document.querySelector(".answer1");
var wrong1x1 = document.querySelector(".wrong1x1");
var wrong1x2 = document.querySelector(".wrong1x2");
var wrong1x3 = document.querySelector(".wrong1x3");

var answer2 = document.querySelector(".answer2");
var wrong2x1 = document.querySelector(".wrong2x1");
var wrong2x2 = document.querySelector(".wrong2x2");
var wrong2x3 = document.querySelector(".wrong2x3");

var answer3 = document.querySelector(".answer3");
var wrong3x1 = document.querySelector(".wrong3x1");
var wrong3x2 = document.querySelector(".wrong3x2");
var wrong3x3 = document.querySelector(".wrong3x3");

var answer4 = document.querySelector(".answer4");
var wrong4x1 = document.querySelector(".wrong4x1");
var wrong4x2 = document.querySelector(".wrong4x2");
var wrong4x3 = document.querySelector(".wrong4x3");

var answer5 = document.querySelector(".answer5");
var wrong5x1 = document.querySelector(".wrong5x1");
var wrong5x2 = document.querySelector(".wrong5x2");
var wrong5x3 = document.querySelector(".wrong5x3");

var answer6 = document.querySelector(".answer6");
var wrong6x1 = document.querySelector(".wrong6x1");
var wrong6x2 = document.querySelector(".wrong6x2");
var wrong6x3 = document.querySelector(".wrong6x3");

var answer7 = document.querySelector(".answer7");
var wrong7x1 = document.querySelector(".wrong7x1");
var wrong7x2 = document.querySelector(".wrong7x2");
var wrong7x3 = document.querySelector(".wrong7x3");

var answer8 = document.querySelector(".answer8");
var wrong8x1 = document.querySelector(".wrong8x1");
var wrong8x2 = document.querySelector(".wrong8x2");
var wrong8x3 = document.querySelector(".wrong8x3");

var answer9 = document.querySelector(".answer9");
var wrong9x1 = document.querySelector(".wrong9x1");
var wrong9x2 = document.querySelector(".wrong9x2");
var wrong9x3 = document.querySelector(".wrong9x3");

var answer10 = document.querySelector(".answer10");
var wrong10x1 = document.querySelector(".wrong10x1");
var wrong10x2 = document.querySelector(".wrong10x2");
var wrong10x3 = document.querySelector(".wrong10x3");

// variables that represents whether or not the user got the question correct. these variables need to be globally defined
var answer1Value = [];
var answer2Value = [];
var answer3Value = [];
var answer4Value = [];
var answer5Value = [];
var answer6Value = [];
var answer7Value = [];
var answer8Value = [];
var answer9Value = [];
var answer10Value = [];

// timer variables which also need to be globally defined
var timeEl = document.querySelector(".timer");
var penaltyEl = document.querySelector(".penalty");
var secondsLeft = 120;

var setTime = function () {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till Quiz Termination.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      visitHighScores()
    }
  },1000)
}

// function for visiting the highscores page
var visitHighScores = function() {
  var landingPage = document.getElementById("landing-page");
  landingPage.style.display = "none";
  var highScoresPage = document.getElementById("HighScores-page");
  highScoresPage.style.display = "inline";
  var returnHomeBtn = document.getElementById("backToHome-icon");
  returnHomeBtn.style.display = "inline";
  var question1 = document.getElementById("question1-page");
  question1.style.display = "none";
  var question2 = document.getElementById("question2-page");
  question2.style.display = "none";
  var question3 = document.getElementById("question3-page");
  question3.style.display = "none";
  var question4 = document.getElementById("question4-page");
  question4.style.display = "none";
  var question5 = document.getElementById("question5-page");
  question5.style.display = "none";
  var question6 = document.getElementById("question6-page");
  question6.style.display = "none";
  var question7 = document.getElementById("question7-page");
  question7.style.display = "none";
  var question8 = document.getElementById("question8-page");
  question8.style.display = "none";
  var question9 = document.getElementById("question9-page");
  question9.style.display = "none";
  var question10 = document.getElementById("question10-page");
  question10.style.display = "none";
  var timerIcon = document.getElementById("Timer-icon");
  timerIcon.style.display = "none";
}

// connected to return to home page button. refreshes the web page on click
var returnToHomePage = function() {
  window.location.reload();
}

// ask the user to input their initials before the quiz starts
var userInitialsFunction = function () {
  userInitials = prompt("Please enter your Initials before taking the quiz:");
  console.log(userInitials);
  question1Page();
}

// sets the display for question1-page. This marks the beginning of the Quiz
var question1Page = function() {
  setTime();

  var landingPage = document.getElementById("landing-page");
  landingPage.style.display = "none";
  var timerIcon = document.getElementById("Timer-icon");
  timerIcon.style.display = "inline";
  var question1 = document.getElementById("question1-page");
  question1.style.display = "inline";
  var returnHomeBtn = document.getElementById("backToHome-icon");
  returnHomeBtn.style.display = "inline";
}

// logic for navigation to the question2-page
var answer1Function = function() {
  answer1Value = true;
  console.log(answer1Value);
  navigateToQuestion2Page();
}

var wrong1Function = function() {
  answer1Value = false;
  console.log(answer1Value);
  navigateToQuestion2Page();
}

var navigateToQuestion2Page = function () {
  if(answer1Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;
  }

  var question1 = document.getElementById("question1-page");
  question1.style.display = "none";
  var question2 = document.getElementById("question2-page");
  question2.style.display = "inline";
}

// logic for navigation to the question3-page
var answer2Function = function() {
  answer2Value = true;
  console.log(answer2Value);
  navigateToQuestion3Page();
}

var wrong2Function = function() {
  answer2Value = false;
  console.log(answer2Value);
  navigateToQuestion3Page();
}

var navigateToQuestion3Page = function () {
  if(answer2Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;
  }

  var question2 = document.getElementById("question2-page");
  question2.style.display = "none";
  var question3 = document.getElementById("question3-page");
  question3.style.display = "inline";
}

//logic for navigation to the question4-page
var answer3Function = function() {
  answer3Value = true;
  console.log(answer3Value);
  navigateToQuestion4Page();
}

var wrong3Function = function() {
  answer3Value = false;
  console.log(answer3Value);
  navigateToQuestion4Page();
}

var navigateToQuestion4Page = function () {
  if(answer3Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;;
  }

  var question3 = document.getElementById("question3-page");
  question3.style.display = "none";
  var question4 = document.getElementById("question4-page");
  question4.style.display = "inline";
}

//logic for navigation to the question5-page
var answer4Function = function() {
  answer4Value = true;
  console.log(answer4Value);
  navigateToQuestion5Page();
}

var wrong4Function = function() {
  answer4Value = false;
  console.log(answer4Value);
  navigateToQuestion5Page();
}

var navigateToQuestion5Page = function () {
  if(answer4Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;;
  }

  var question4 = document.getElementById("question4-page");
  question4.style.display = "none";
  var question5 = document.getElementById("question5-page");
  question5.style.display = "inline";
}

//logic for navigation to the question6-page
var answer5Function = function() {
  answer5Value = true;
  console.log(answer5Value);
  navigateToQuestion6Page();
}

var wrong5Function = function() {
  answer5Value = false;
  console.log(answer5Value);
  navigateToQuestion6Page();
}

var navigateToQuestion6Page = function () {
  if(answer5Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;
  }

  var question5 = document.getElementById("question5-page");
  question5.style.display = "none";
  var question6 = document.getElementById("question6-page");
  question6.style.display = "inline";
}

//logic for navigation to the question7-page
var answer6Function = function() {
  answer6Value = true;
  console.log(answer6Value);
  navigateToQuestion7Page();
}

var wrong6Function = function() {
  answer6Value = false;
  console.log(answer6Value);
  navigateToQuestion7Page();
}

var navigateToQuestion7Page = function () {
  if(answer6Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;
  }

  var question6 = document.getElementById("question6-page");
  question6.style.display = "none";
  var question7 = document.getElementById("question7-page");
  question7.style.display = "inline";
}

//logic for navigation to the question8-page
var answer7Function = function() {
  answer7Value = true;
  console.log(answer7Value);
  navigateToQuestion8Page();
}

var wrong7Function = function() {
  answer7Value = false;
  console.log(answer7Value);
  navigateToQuestion8Page();
}

var navigateToQuestion8Page = function () {
  if(answer7Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;
  }

  var question7 = document.getElementById("question7-page");
  question7.style.display = "none";
  var question8 = document.getElementById("question8-page");
  question8.style.display = "inline";
}

//logic for navigation to the question9-page
var answer8Function = function() {
  answer8Value = true;
  console.log(answer8Value);
  navigateToQuestion9Page();
}

var wrong8Function = function() {
  answer8Value = false;
  console.log(answer8Value);
  navigateToQuestion9Page();
}

var navigateToQuestion9Page = function () {
  if(answer8Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;
  }

  var question8 = document.getElementById("question8-page");
  question8.style.display = "none";
  var question9 = document.getElementById("question9-page");
  question9.style.display = "inline";
}

//logic for navigation to the question10-page
var answer9Function = function() {
  answer9Value = true;
  console.log(answer9Value);
  navigateToQuestion10Page();
}

var wrong9Function = function() {
  answer9Value = false;
  console.log(answer9Value);
  navigateToQuestion10Page();
}

var navigateToQuestion10Page = function () {
  if(answer9Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;
  }

  var question9 = document.getElementById("question9-page");
  question9.style.display = "none";
  var question10 = document.getElementById("question10-page");
  question10.style.display = "inline";
}

// logic for navigation from the question10-page to the highscores page
var answer10Function = function() {
  answer10Value = true;
  console.log(answer10Value);
  navigateToHighScoresPage();
}

var wrong10Function = function() {
  answer10Value = false;
  console.log(answer10Value);
  navigateToHighScoresPage();
}

var navigateToHighScoresPage = function () {
  if(answer10Value === true) {
    console.log('Correct!');
  } else {
    console.log('Incorrect! Minus time!');
    secondsLeft = secondsLeft-10;
  }

  var question10 = document.getElementById("question10-page");
  question10.style.display = "none";
  var timerIcon = document.getElementById("Timer-icon");
  timerIcon.style.display = "none";

  // calculate final score, save score to local storage and display it on the High Scores Page.
  var mostRecentScore = userInitials + " : " + secondsLeft
  console.log(mostRecentScore)

  visitHighScores();
}

var saveYourHighScore = function () {

}

// event listeners
highScoresButton.addEventListener("click", visitHighScores);
returnToHomePageButton.addEventListener("click", returnToHomePage);
beginQuizButton.addEventListener("click", userInitialsFunction);

// event listeners for questions pages
answer1.addEventListener("click", answer1Function);
wrong1x1.addEventListener("click", wrong1Function);
wrong1x2.addEventListener("click", wrong1Function);
wrong1x3.addEventListener("click", wrong1Function);

answer2.addEventListener("click", answer2Function);
wrong2x1.addEventListener("click", wrong2Function);
wrong2x2.addEventListener("click", wrong2Function);
wrong2x3.addEventListener("click", wrong2Function);

answer3.addEventListener("click", answer3Function);
wrong3x1.addEventListener("click", wrong3Function);
wrong3x2.addEventListener("click", wrong3Function);
wrong3x3.addEventListener("click", wrong3Function);

answer4.addEventListener("click", answer4Function);
wrong4x1.addEventListener("click", wrong4Function);
wrong4x2.addEventListener("click", wrong4Function);
wrong4x3.addEventListener("click", wrong4Function);

answer5.addEventListener("click", answer5Function);
wrong5x1.addEventListener("click", wrong5Function);
wrong5x2.addEventListener("click", wrong5Function);
wrong5x3.addEventListener("click", wrong5Function);

answer6.addEventListener("click", answer6Function);
wrong6x1.addEventListener("click", wrong6Function);
wrong6x2.addEventListener("click", wrong6Function);
wrong6x3.addEventListener("click", wrong6Function);

answer7.addEventListener("click", answer7Function);
wrong7x1.addEventListener("click", wrong7Function);
wrong7x2.addEventListener("click", wrong7Function);
wrong7x3.addEventListener("click", wrong7Function);

answer8.addEventListener("click", answer8Function);
wrong8x1.addEventListener("click", wrong8Function);
wrong8x2.addEventListener("click", wrong8Function);
wrong8x3.addEventListener("click", wrong8Function);

answer9.addEventListener("click", answer9Function);
wrong9x1.addEventListener("click", wrong9Function);
wrong9x2.addEventListener("click", wrong9Function);
wrong9x3.addEventListener("click", wrong9Function);

answer10.addEventListener("click", answer10Function);
wrong10x1.addEventListener("click", wrong10Function);
wrong10x2.addEventListener("click", wrong10Function);
wrong10x3.addEventListener("click", wrong10Function);