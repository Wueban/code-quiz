// dom elements 
var questionMainEL = document.querySelector("#questionMain");
var questionTitleEL = document.querySelector("#questionTitle")
var timerEl = document.querySelector(".timer");
var startbtnEl = document.querySelector(".start-btn");
var initialEl = document.querySelector("#initals")
var submitbtn = document.querySelector("#submit")
var answerChoiceA = document.getElementById("answerA")
var answerChoiceB = document.getElementById("answerB");
var answerChoiceC = document.getElementById("answerC");
var answerChoiceD = document.getElementById("answerD");

// state the quiz variables 
var time = 50;
var timeStart = false
var timeRemaining = true
var score = 0
var i = 0
// save questions into an array withing an object 
// list of all questions, choices, and answers
var questions = [
    {
      title: "Which one is a looping structure in JavaScript?",
      choices: ["All the below", "For", "While", "do-while loops"],
      answer: "All the below"
    },
    {
      title: "What are the two basic groups of data types in JavaScript?",
      choices: [
        "Primitive and attribute",
        "Primitive and reference types",
        "Reference types and attribute",
        "None of the above"
      ],
      answer: "Primitive and reference types"
    },
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "Boolean operators that can be used in JavaScript include:",
      choices: [
        "'And' Operator &&",
        "'Or' Operator ||",
        "'Not' Operator !",
        "All the above"
      ],
      answer: "All the above"
    },
    {
      title:
        "Which one of these is not among the three different types of errors in JavaScript?",
      choices: [
        "Animation time errors",
        "Load time errors",
        "Run time errors",
        "Logical Errors"
      ],
      answer: "Animation time errors"
    },
    {
      title: "What is the data type of variables in JavaScript?",
      choices: [
        "Object data types",
        "Function data type",
        "None of the above",
        "All of the above"
      ],
      answer: "Object data types"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    }]

    var countdown = setInterval(setCountdownTimer , 1000);

    //function that starts the countdown 
   //function that changes the time var
function setCountdownTimer() {
    if (timeStart)
    time--;
    if(time<= 0) {
    end-quiz();
    time = 0;    
    // clearInterval(countdownTimerInterval);
    //alert user and stop quiz
    }
    document.getElementById("timer").innerHTML = time;
}

//click the start button 

startbtnEl.addEventListener("click", function(){
    QuestionEl.style.display = "block";
    setCountdown.style.display = "none";
    document.getElementById("scoreKeep").style.display = "block";
    document.getElementById("score").innerHTML = score; 
    setCountdownTimer();
    quizQuestions();
    timeStart = true;

});

var quizQuestions = function(){
questionTitleEL.textContent = questions[i].questions
answerChoiceA.textContent = questions[i].answerChoice[0]
answerChoiceB.textContent = questions[i].answerChoice[1]; 
answerChoiceC.textContent = questions[i].answerChoice[2]; 
answerChoiceD.textContent = questions[i].answerChoice[3];  
}

   
