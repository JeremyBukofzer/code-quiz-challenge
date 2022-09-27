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
var highScoresEl = document.getElementById("high-scores")
var submitScoreBtn = document.getElementById("submit-score")
var initialsEl = document.getElementById("initials")
var scoresEl = document.getElementById("high-scores")
var addScoreEl = document.getElementById("add-scores")
var viewScoresEl = document.getElementById("highscores")
var clearScoresEl = document.getElementById("clear")
var scoreScreenEl = document.getElementById("score-list")


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
// hides sections not in use
choiceEl.style.display = "none"
endScreenEl.style.display = "none"
scoresEl.style.display = "none"

// starts quiz by presenting questions
function startQuiz() {
    timeInterval = setInterval(timerCount, 1000)
    startEl.style.display = "none"
    endScreenEl.style.display = "none"

    timerCount()
    renderQuestion()

}
//ends quiz when questions are answered or time runs out
function endQuiz() {
    clearInterval(timeInterval);
    startEl.style.display = "none"
    questionScreen.style.display = "none"
    timerEl.style.display= "none"
    endScreenEl.style.display = "initial"
    finalScore.innerText = "Your Score is: " + timeLeft;
    
    
    setTimeout(1000);
    highScore();

}


//Chooses a question from the questions variable
function renderQuestion() {
    var displayedQuestion = questions[qIndex]
    questionEl.innerText = displayedQuestion.text;
    choiceEl.style.display = "initial"
    
    choice1.innerText = displayedQuestion.choices[0]
    choice2.innerText = displayedQuestion.choices[1]
    choice3.innerText = displayedQuestion.choices[2]
    choice4.innerText = displayedQuestion.choices[3]
}

//Checks if the answer is right or wrong
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

//countdown timer display
function timerCount() {
    if(timeLeft > 0){
        timerEl.innerText = "Timer: " + timeLeft;
        timeLeft--
    } else {
        timerEl.style.display = "none"
        endQuiz()
    }
}

//takes score and adds to a list with entered initials
function highScore(){
    submitScoreBtn.addEventListener('click', function() {
        
        
        var id = initialsEl.value
        var score = timeLeft;
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        if(id.length > 0) {
            var addScore= {
                id,
            score
        }
       scoresEl.style.display = "initial"
       choiceEl.style.display = "none"
       endScreenEl.style.display = "none"
       highscores.push(addScore);
       window.localStorage.setItem("highscores", JSON.stringify(highscores)); 
           
        if(highscores !== undefined) {
            highscores.sort(function(a,b){
                return b.score - a.score
            })
            highscores.forEach(function(score){
                var li = document.createElement("li");
                li.innerHTML = "<h5>" + score.id + "  " + score.score + "</h5>"
                var olEl = document.getElementById("add-scores");
                olEl.appendChild(li);
            })
        }
    }
})   
}

//clears stored high score list
  function clearHighScores() {
    localStorage.clear()
    addScoreEl.style.display = "none"
  }

// goes to high score list from any screen
function viewHighScores() {

    scoresEl.style.display = "initial"
       choiceEl.style.display = "none"
       endScreenEl.style.display = "none"
       startEl.style.display = "none"
    


    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];




highscores.sort(function(a,b){
    return b.score - a.score
})

highscores.forEach(function(score){
    
    var li = document.createElement("li");
    li.innerHTML = "<h3>" + score.id + score.score + "</h5>"
    var olEl = document.getElementById("add-scores");
    olEl.appendChild(li);
})
}

//event listeners for the buttons
clearScoresEl.addEventListener('click', clearHighScores)
viewScoresEl.addEventListener('click', viewHighScores)
startBtn.addEventListener('click', startQuiz)
choice1.addEventListener('click', confirmAnswer)
choice2.addEventListener('click', confirmAnswer)
choice3.addEventListener('click', confirmAnswer)
choice4.addEventListener('click', confirmAnswer)


