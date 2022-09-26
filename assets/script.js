var questionEl = document.getElementById("question-text")
var choiceEl = document.getElementById("answer-btns")
var startBtn = document.getElementById("start-btn")
var startEl = document.getElementById("start-screen")
var timerEl = document.getElementById("timer-count")
var correct = document.getElementById("right-wrong")


var qIndex = [0]

// array of questions and answers
    //question, choices, answers
var questions = [
    {
        text:"Commonly used data types DO NOT include:",
        choices:["strings", "alerts", "booleans", "numbers"],
        answer:"alerts" 
    },
    {
        text:"The condition in an if/else statement is enclosed within ____.",
        choices:["quotes", "curly brackets", "parentheses", "square brackets"],
        answer:"parentheses"   
    },
    {
        text:"Arrays in JavaScript can be used to store ___.",
        choices:["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer:"all of the above"   
    },
    {
        text:"String values must be enclosed within ___ when being assigned to variables.",
        choices:["commas", "curly brackets", "quotes", "parentheses"],
        answer:"quotes"   
    },
    {
        text:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices:["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer:"console.log"   
    },
    

]

let questionNum = 0;
let timeLeft = questions.length * 15;


function startQuiz() {
    timeInterval = setInterval(timerCount, 1000)
    startEl.style.display = "none"

    timerCount()
    renderQuestion()

}

function timerCount() {
    if(timeLeft > 0){
        timerEl.innerText = "Timer: " + timeLeft;
        timeLeft--
    }
}
    

function renderQuestion() {
    questionEl.innerText = questions[qIndex].text

    choiceEl.innerText = ""

    for (var i = 0; i < questions[qIndex].choices.length; i++) {
        var qButton = document.createElement('button')
        qButton.classList.add('choice-button');
        var choices = questions[qIndex].choices[i]
        qButton.innerText = choices
        choiceEl.appendChild(qButton)
        
    }
}

startBtn.addEventListener('click', startQuiz)



    // also starts timer
//if statement for selecting choice goes to next question
    // show "wrong" for incorrect choice
    // show "correct!" for correct choice

// math for timer
    //when timer reaches 0 quiz ends

//enter and save initials
//display highscores

//button to try again