'use strict';

// const quiz_box = document.getElementById("quiz");
// let que_count = 0;

// function startTimer(duration, view_date) {
//   var countdown = duration, minutes, seconds;
//   setInterval(function () {
//       minutes = parseInt(countdown / 60, 10);
//       seconds = parseInt(countdown % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       view_date.textContent = minutes + ":" + seconds;

//       if (--countdown < 0) {
//           // countdown = duration;
//           window.location="./show.html"

//       }
//   }, 1000);
// }

// window.onload = function () {
//   var minutesOfFive = 10*1,
//       view_date = document.querySelector('#time');
   
//   startTimer(minutesOfFive, view_date);
// };



let cquestions = [
    {
    numb: 1,
    question: "What does CSS stands for ?",
    answer: "Cascading style sheets",
    options: [
      "Cascade style sheets",
      "Color and style sheets",
      "Cascading style sheets",
      "None of the above"
    ]
  },
    {
    numb: 2,
    question: "Which of the following is the correct syntax for referring the external style sheet?",
    answer: `"<link rel="stylesheet" type="text/css" href="example.css">"`,
    options: [
      `"<style src = example.css>"`,
     ` "<style src = "example.css" >"`,
     ` "<stylesheet> example.css </stylesheet>"`,
      `"<link rel="stylesheet" type="text/css" href="example.css">"`,
    ]
  },
    {
    numb: 3,
    question: "Which of the following CSS property is used to set the background image of an element?",
    answer: "background-image",
    options: [
      "background-attachment",
      "background-image",
      "background-color",
      "None of the above"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    answer: "a {text-decoration : none;}",
    options: [
      "a {text-decoration : underline;}",
      "a {decoration : no-underline;}",
      " a {text-decoration : none;}",
      "None of the above"
    ]
  },
    {
    numb: 5,
    question: `" How to select the elements with the class name "example"?"`,
    answer: ".example",
    options: [
      "example",
      "#example",
      ".example",
      "Class example"
    ]
  },
]

let counter=0;
let userAnswers=[];
let x=[];
function startquiz(){
  quebody( cquestions[0] )

  
}

function quebody( x ){
  document.getElementById("que_text").innerHTML=  x.question;
  document.getElementById("option1").innerHTML= x. options[0];
  document.getElementById("option2").innerHTML= x. options[1];
  document.getElementById("option3").innerHTML= x. options[2];
  document.getElementById("option4").innerHTML= x. options[3];

}
startquiz()

let i=0;
function showque() {
  if (i==cquestions.length-1 ){  
    
    document.getElementById("next").innerHTML="Submit";
    window.location="../html/show.html"
}
else {
i++;
quebody(cquestions[i]);
// console.log(quebody(cquestions[i]));
}
}

function correctque(x){
  if(x==cquestions[i].answer){

    alert("correct")
    

    counter++;

  }

  showque();

}

// function nextq(){

  

//   // document.getElementById("next").disabled=true;

  

// }



var choosed=0;
function ans1(){
  choosed =1 ;

}
function ans2(){
  choosed =2 ;
  
}

function ans3(){
  choosed =3 ;
  
}

function ans4(){
  choosed =4 ;
  
}

let anse=[];
let indexAns=0;
function setAnswers(){
anse[indexAns]=choosed;
indexAns++;

}
function nextq(){
  if(choosed>0){
  setAnswers();
  correctque();
}
}




function localStorage() {
  let x =JOSN.stringify(anse);
  localStorage.setItem('data', x);  
  }
  
  localStorage()

  function onclick(){
    window.location="../../index.html"
    
    }