var headerEl = document.querySelector(".pageheaer");
var buttonEl = document.querySelector(".button");
var mainpageEl = document.querySelector(".mainpage");
var questionEl= document.querySelector(".questiontext");
var intro= document.querySelector(".quizintro");
var nextQuestion = document.querySelector(".next");

var answerList = document.querySelector(".answers");

var rightOrWrong = document.querySelector(".rightorwrong");

var questionsArray= ["Which of these is a coding language?", 
                    "How are you?", 
                    "What is your name?"];
var answersOneArray = ["HTML", 
                        "JavaScript", 
                        "CSS", 
                        "All of the above"];



var startQuiz = function() {
   questionEl.textContent = questionsArray[0];
   
   for(var i=0; i < answersOneArray.length; i++) {
    answerList.textContent += answersOneArray[i];
    console.log(answersOneArray[i]);
   }
   correctAnswer = answersOneArray[1];


   } 
   


buttonEl.addEventListener("click", startQuiz);