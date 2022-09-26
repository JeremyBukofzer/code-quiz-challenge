// DOM selectors
var questionEl = document.getElementById("question-text")
var questionScreen = document.getElementById("question-container")
var choiceEl = document.getElementById("answer-btns")
var startBtn = document.getElementById("start-btn")
var startEl = document.getElementById("start-screen")
var timerEl = document.getElementById("timer-count")
var correct = document.getElementById("right-wrong")
var finalScore = document.getElementById("final-score")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")
var endScreenEl = document.getElementById("end-screen")


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

let qIndex = 0;
let timeLeft = questions.length * 15;

endScreenEl.style.display = "none"


function startQuiz() {
    timeInterval = setInterval(timerCount, 1000)
    startEl.style.display = "none"
    endScreenEl.style.display = "none"

    timerCount()
    renderQuestion()

}

function endQuiz() {
    clearInterval(timeInterval);
    startEl.style.display = "none"
    finalScore.innerText = "Your Score is: " + timeLeft;
    questionScreen.style.display = "none"
    timerEl.style.display= "none"
    endScreenEl.style.display = "initial"
    

}

function timerCount() {
    if(timeLeft > 0){
        timerEl.innerText = "Timer: " + timeLeft;
        timeLeft--
    } else {
        timerEl.style.display = "none"
        endQuiz()
    }
}
    

function renderQuestion() {
   var displayedQuestion = questions[qIndex]
   questionEl.innerText = displayedQuestion.text;

   choice1.innerText = displayedQuestion.choices[0]
   choice2.innerText = displayedQuestion.choices[1]
   choice3.innerText = displayedQuestion.choices[2]
   choice4.innerText = displayedQuestion.choices[3]
}

function confirmAnswer(event) {
    var answer = questions[qIndex].answer
    var selectedChoice = event.target.innerText
    
    
    if  (selectedChoice === answer){
        correct.innerText = "CORRECT!"
    } else {
        correct.innerText = "WRONG!"
        timeLeft -= 10
    }

    qIndex++;
    if(qIndex === questions.length){
        endQuiz()
    } else {
        renderQuestion()
    }
} 

function scoreList(){

}



startBtn.addEventListener('click', startQuiz)
choice1.addEventListener('click', confirmAnswer)
choice2.addEventListener('click', confirmAnswer)
choice3.addEventListener('click', confirmAnswer)
choice4.addEventListener('click', confirmAnswer)



