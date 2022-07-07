var timerEl = document.getElementById("timer")
var time = 50;

var questions =[ {
    
      title: "Which one is a looping structure in JavaScript?",
      choices: ["All the below", "For", "While", "do-while loops"],
      answer: 0,
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
// functions with a parameter 
 var quizQuestions = function(q){

    // selec element where the questions will apear 
        var tittleDiv = document.getElementById("title");
    
        //fix, switch the questions with Q so when we call back the function quizQuestions() with put the parameter of questions 
        tittleDiv.textContent = q.title
    
        //sellect the options on the li
    
        var alt = document.querySelectorAll(".alternative");
        
    
        
    // loop throguht the array
    
        alt.forEach(function(element , index){
            element.textContent = q.choices[index];
            
            element.addEventListener("click", function(){
                // check the correct answer
                if(q.answer === index){
                console.log("correct asnwer")
                quizQuestions(questions[questionsCount]);
                questionsCount++
            } else{
                console.log("wrong asnwer")
            }
            })
        })
    }

       
        var btn = document.getElementById('btn')
        
        // keep track of questions 
        var questionsCount = 0;


        btn.addEventListener("click", function(){
            CountdownTimer();
            quizQuestions(questions[questionsCount]);
            questionsCount++
        });

        