var questionEl = document.getElementById("question-text")
var choiceEl = document.getElementById("answer-btns")
var nextQ = document.querySelector('qButton')



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

function renderQuestion(question) {
    questionEl.innerText = question.text

    for (var i = 0; i < question.choices.length; i++) {
        var qButton = document.createElement('button')
        var choices = question.choices[i]
        qButton.innerText = choices
        choiceEl.appendChild(qButton)
        
    }
}

nextQ.addEventListener('click', function() {

})
//start button to start quiz
    // also starts timer
//if statement for selecting choice goes to next question
    // show "wrong" for incorrect choice
    // show "correct!" for correct choice

// math for timer
    //when timer reaches 0 quiz ends

//enter and save initials
//display highscores

//button to try again