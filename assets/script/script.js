// dom elements 
var QuestionEl = document.querySelector("#questions");
var timerEl = document.querySelector(".timer");
var startbtnEl = document.querySelector(".start-btn");
var initialEl = document.querySelector("#initals")
var submitbtn = document.querySelector("#submit")


// state the quiz variables 
var currentQuestion = 0;
var time = questions.length * 3;
var timerId;

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

var startQuiz = function (){
    //dont show up the questions at the begging of the quiz
    var screen = document.getElementById(".start-btn");
    // the class hide will kepp hide the tag that has that element 
    screen.setAttribute("class", "hide")

    //show up again
    QuestionEl.removeAttribute("class")

    //start time

    timerId = setInterval(clocktick, 1000);

    //show starting time 
    timerEl.textContent = time;

    getQuestion();

};

var getQuestion = function (){
    // get the questions from the array 
    var currentQuestionIndex = questions[currentQuestion];
     
    // change the title with the current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestionIndex.title;

    
}

startbtnEl.addEventListener("click" , startQuiz)