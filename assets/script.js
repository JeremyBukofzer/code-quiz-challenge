var questionEl = document.getElementById("question-text")
var choiceEl = document.getElementById("answer-btns")
var nextQ = document.querySelector("choice-button")
var startBtn = document.getElementById("start-btn")
var startEl = document.getElementById("start-screen")

var index = [0]

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
    }
]

startBtn.addEventListener('click', function() {
    startEl.style.display = "none"
    renderQuestion()

})

function renderQuestion() {
    questionEl.innerText = questions[index].text

    choiceEl.innerText = ""

    for (var i = 0; i < questions[index].choices.length; i++) {
        var qButton = document.createElement('button')
        qButton.classList.add('choice-button');
        var choices = questions[index].choices[i]
        qButton.innerText = choices
        choiceEl.appendChild(qButton)
        
    }
}

nextQ.addEventListener('click', function() {
    index++
    renderQuestion()

})

renderQuestion()


    // also starts timer
//if statement for selecting choice goes to next question
    // show "wrong" for incorrect choice
    // show "correct!" for correct choice

// math for timer
    //when timer reaches 0 quiz ends

//enter and save initials
//display highscores

//button to try again