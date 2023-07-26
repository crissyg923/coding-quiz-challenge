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
}


];

//Variables created for HTML elements
const questionEl = document.getElementById("question");
const answerButton = document.getElementById("answer-options");
const answerPrompt = document.getElementById("rightorwrong");
const timerEl = document.querySelector(".timer");

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
       // Calls function to create and append image
       
     }
 
   }, 1000);
 }
//Function to intitiate quiz
function startQuiz() {
 questionIndex = 0;
setTime();
 showQuestion()  
}

//Function to show questions in the question index
function showQuestion() {
   //Resets previous question and answers
   resetSettings();
   let currentQuestion = questions[questionIndex];
   let questionNo = questionIndex + 1;
   questionEl.innerHTML = questionNo + "." + currentQuestion.question;
   
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
function resetSettings(){
   answerPrompt.style.display = "none";
   console.log(answerButton.children)
  while(answerButton.firstChild){
   console.log(answerButton.firstChild )
     answerButton.removeChild(answerButton.firstChild);
   } 
   console.log(answerButton.children )
   console.log(answerButton.children.length); 
   // //for (var i = 0; i<answerButton.children.length; i+=1) { 
   //  //  console.log(answerButton.children[i]);
   //   answerButton.removeChild(answerButton.children[0]);
   //   answerButton.removeChild(answerButton.children[1]);
   //   answerButton.removeChild(answerButton.children[2]);
   //   answerButton.removeChild(answerButton.children[3]);

   // }
}
//Displays answer is correct or incorrecr and goes to next question
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
   questionEl.textContent = "You scored " + timeLeft + "! Save your high score by entering your name below!";
   const highScoreInput = document.createElement("input");
   highScoreInput.classList.add("inputField");

   answerButton.appendChild(highScoreInput);
   const sendHighScores = document.createElement("button");
   sendHighScores.classList.add("sendbutton");
   sendHighScores.textContent = "Send!";

   answerButton.appendChild(sendHighScores);

}
function nextQuestion(){
   questionIndex++;
   if(questionIndex < questions.length){
      showQuestion();
   } else {
      showScore();
   }
}



startQuiz();