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

//         if (front.value == "html") {
//               window.location="../pages/quiz.html"    
//                 }
//         else if (front.value == "css") {
//             window.location="../pages/quiz.html" 
// }
// else  (front.value == "javascript") 
//             window.location="../pages/quiz.html" 

window.location="./quize.html" 
}