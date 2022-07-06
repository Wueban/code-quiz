// dom elements 
var questionMainEL = document.querySelector("#questionMain");
var questionTitleEL = document.querySelector("#questionTitle")
var timerEl = document.querySelector("#timer");
var startbtnEl = document.querySelector(".start-btn");
var initialEl = document.querySelector("#initals")
var submitbtn = document.querySelector("#submit")
var answerChoiceA = document.getElementById("answerA")
var answerChoiceB = document.getElementById("answerB");
var answerChoiceC = document.getElementById("answerC");
var answerChoiceD = document.getElementById("answerD");

// state the quiz variables 
var time = 50;
var timeStart = true;
var timeRemaining = true
var score = 0

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

   

    //function that starts the countdown 
   //function that changes the time var
function CountdownTimer() {
    
    var timeLeft = 50;

    var timeInterval = setInterval(function(){
        if(timeLeft > 1){
            timerEl.textContent = timeLeft + 'you have this many seconds remaining';
            //decrease the seconds
            timeLeft--;
        } else if (timeLeft ===  1){
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            //
            timerEl.textContent = '';

            // clear the interval to stop at 0
            clearInterval(timeInterval);

        }

    },  1000)
   
    };
    document.getElementById("timer").innerHTML = time;


// show the questions 
//loop throguht the array 
var quizQuestions = function(){
    questionTitleEL.textContent = questions[i].questions
    answerChoiceA.textContent = questions[i].answerChoice[0]
    answerChoiceB.textContent = questions[i].answerChoice[1]; 
    answerChoiceC.textContent = questions[i].answerChoice[2]; 
    answerChoiceD.textContent = questions[i].answerChoice[3];  
}

var answerChoiceA = function(event){
    event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);

}

startbtnEl.addEventListener("click", function(){
    CountdownTimer();
    
});
