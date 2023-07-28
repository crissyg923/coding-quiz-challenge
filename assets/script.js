//Question & Answer Object
var questions = [
   {question: "Which of these is a coding language?", 
   answers: [
      {text: "HTML", correct: false},
      {text: "Javascript", correct: true},
      {text: "CSS", correct: false},
      {text: "All of the above", correct: false},
   ]
},

{question: "Which of these identifiers should be placed in front of JQUERY statements?", 
   answers: [
      {text: "$", correct: true},
      {text: "+", correct: false},
      {text: "@", correct: false},
      {text: "%", correct: false},
   ]
},

{question: "What built-in Javascript function allows me to set a timer?", 
   answers: [
      {text: "toString", correct: false},
      {text: ".combine", correct: false},
      {text: "parseInt", correct: false},
      {text: "setInterval()", correct: true},
   ]
},

{question: "How can I access the value of an ID established on the DOM?", 
   answers: [
      {text: "document.want", correct: false},
      {text: "innerHTML", correct: false},
      {text: "document.getElementByID", correct: true},
      {text: "function()", correct: false},
   ]
}


];

//Variables created for HTML elements
var questionEl = document.getElementById("question");
var answerButton = document.getElementById("answer-options");
var answerPrompt = document.getElementById("rightorwrong");
var timerEl = document.querySelector(".timer");
var quizStart = document.querySelector(".quizstart");
var startButton = document.getElementById("startbutton");
var introPage = document.querySelector(".intropage");
var highScoreNames = document.querySelector(".highscorenames");
var initials = document.querySelector(".initials");

//Setting initial scores and indices
let questionIndex = 0;
let timeLeft = 75;


function setTime() {
   // Sets interval in variable
   var timerInterval = setInterval(function() {
     timeLeft--;
     timerEl.textContent = timeLeft;

     if(timeLeft === 0) {
       // Stops execution of action at set interval
       clearInterval(timerInterval);
       timerEl.textContent= " ";

    //Stops the timer upon quiz completion   
     } 
     else if (questionIndex >=4) {
      clearInterval(timerInterval);
     }
 
   }, 1000);
 }
 function init() {
   // Get stored todos from localStorage
   var storedTodos = JSON.parse(localStorage.getItem("highScoreNames"));
 
   // If todos were retrieved from localStorage, update the todos array to it
   if (storedTodos !== null) {
     highScoreNames = highScoresList;
   }
 }

//Function to intitiate quiz
function startQuiz() {
  init();
//Sets question index to 0
 questionIndex = 0;
 //Hides intro page using JQUERY
 $(introPage).hide();
 //Calls timer function to start timer
setTime();
// Displays timer
$(timerEl).show();

$(quizStart).show();
   
 showQuestion()  
}

//Function to show questions in the question index
function showQuestion() {
   //Resets previous question and answers
   resetSettings();
   // Current question in a variable
   var currentQuestion = questions[questionIndex];
   
   questionEl.textContent = currentQuestion.question;
   
//Creates button to add answers to
currentQuestion.answers.forEach(answer => {
 const button = document.createElement("button");
 button.innerHTML = answer.text;
 button.classList.add("btn");
 answerButton.appendChild(button);
 if(answer.correct){
   button.dataset.correct=answer.correct;
   
 }
 //Event listener to listen for clicked answer
 button.addEventListener("click", selectAnswer);
});
}
//Ensures that message prompt only shows after answering a question
//and deletes children of answerButton in HTML file
function resetSettings(){
   answerPrompt.style.display = "none";
   console.log(answerButton.children)
  while(answerButton.firstChild){
   console.log(answerButton.firstChild )
     answerButton.removeChild(answerButton.firstChild);
   } 
   console.log(answerButton.children )
   console.log(answerButton.children.length); 
  
}
//Displays answer is correct or incorrect and goes to next question
function selectAnswer(event){
    selectedBtn = event.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if (isCorrect) {
      $(answerPrompt).show();
      answerPrompt.textContent = "Answer Correct!!!!!";
   } else {
      $(answerPrompt).show();
    answerPrompt.textContent = "Answer Incorrect 😯";
    //Subtracts 5 from score for every wrong answer
    timeLeft-=5
   }
   setTimeout(nextQuestion, 500); 
}
//Resets question element and displays score

function showScore(){
   resetSettings();
   clearInterval();

   if (timeLeft<0) {
      timeLeft=0;}
   questionEl.textContent = "You scored " + timeLeft + "! Save your high score by pressing the button below.";
   // const highScoreInput = document.createElement("input");
   // highScoreInput.classList.add("inputField");
   

   // answerButton.appendChild(highScoreInput);
   const sendHighScores = document.createElement("button");
   sendHighScores.classList.add("sendbutton");
   sendHighScores.textContent = "Send!";

   answerButton.appendChild(sendHighScores);

   
   sendHighScores.addEventListener("click", appendHighScores);
   }
//Appends the score to the high score list
var highScoresList= [ ];

function appendHighScores(){
      highScoreNames.innerHTML = "";
   
// for (var i=0; i<= highScoreNames; i++ ){
   highscoreinput = prompt("Please enter your initials for high score");
      var names = document.createElement("li");
      
      // let text = highscoreinput.value;
      let finalscore = highscoreinput += timeLeft;

      names.innerHTML = finalscore
      // names.setAttribute("data-index", i);
      
      // highScoreNames.innerHTML = finalscore;
      highScoreNames.appendChild(names);

      console.log(finalscore);
   //  highScoresList.push(names)
   var temp = {
      Name: highscoreinput,
      Score: timeLeft

   }
   highScoresList.push(temp);
console.table(highScoreNames);
      saveLocal();
}     

function saveLocal(){
   
      localStorage.setItem("highscores", JSON.stringify(highScoresList));
    }

function nextQuestion(){
   questionIndex++;
   if(questionIndex < questions.length){
      showQuestion();
   } else {
      showScore();
   }
}


init();
startButton.addEventListener("click",startQuiz);