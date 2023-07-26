var headerEl = document.querySelector(".pageheaer");
var buttonEl = document.querySelector(".button");
var mainpageEl = document.querySelector(".mainpage");
var questionEl= document.querySelector(".questiontext");
var intro= document.querySelector(".quizintro");
var nextQuestion = document.querySelector(".next");

var answerList = document.querySelector(".answers");

var rightOrWrong = document.querySelector(".rightorwrong");

var questionsAnswers= [
   {question1: "Which of these is a coding language?", 
   possibleAnswers: ["HTML"==false, "Javascript"==true, "CSS"==false, "All of the Above"==false]
},

{question2: "What is your name?",
possibleAnswers: ["hoo"==true, "moo"==false, "floo"==false, "shoo"==false]
},

];




var startQuiz = function() {
   questionEl.textContent = questionsArray[0];
   
   for(var i=0; i < questionsAnswers.length; i++) {
    answerList.textContent += answersOneArray[i];
    console.log(answersOneArray[i]);
   }
   correctAnswer = answersOneArray[1];


   } 
   


buttonEl.addEventListener("click", startQuiz);