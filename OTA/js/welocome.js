const menu_btn = document.querySelector("#menu_btn");
const menu = document.querySelector("#menu");
menu_btn.addEventListener('click', () => {
    if (menu.style.transform == "translateX(100%)") {
        menu.style.transform = "translateX(0%)";
    } else {
        menu.style.transform = "translateX(100%)"
    }
});


const start_btn = document.getElementById("start");

start_btn.onclick = ()=>{

   
//         if (Poisition.value == "html") {
//               window.location="../pages/quiz.html"    
//                 }
//         else if (Poisition.value == "css") {
//             window.location="../pages/quiz.html" 
// }
// else  (Poisition.value == "javascript") 
//             window.location="../pages/quiz.html" 

// window.location="./quize.html" 
// }

// function checkDate(){

   

//     let info1=JSON.parse(X)
   
//     console.log(X);
// console.log(info1);
//     console.log(info1[0]);
//     console.log(info1[3]);

// if ((enterunum.value ==info1[0])&&(enterPwd.value == info1[3])) {
    
//     alert("sucs");
//     window.location="./welocome.html";

// }

function logout(){
window.localStorage="../../index.html"

}