'use strict'
const regisform = document.getElementById("regForm");
let fname = document.getElementById("fname"); 
let lname = document.getElementById("lname"); 
let email = document.getElementById("email"); 
let pass   = document.getElementById("pass"); 
let conpass = document.getElementById("conpass");
let fnameMsg=document.getElementById("ufname");
let lnameMsg=document.getElementById("ulname");
let mailMsg=document.getElementById("umail");
let psMsg=document.getElementById("ups1");
let ps2Msg=document.getElementById("ups2");

let info=[];

function LocalStorageFrom(){
    let ureg=JSON.stringify(info);
    localStorage.setItem('Data',ureg); 
    console.log(ureg);
}
// /*************************************************************** */
function User(fname, lname,email, password, spassword){
    this.fname=fname;
    this.lname=lname;
    this.email=email;
    this.password=password;
    this.spassword=spassword;
    this.ufname=ufname(fname);
    this.ulname=ulname(lname);
    this.mail=mail(email);
    this.checkPassword=checkPassword(password,spassword);
   

    // console.log(fname, lname,email, pass, conpass);
    // startReg()
    info.push(fname, lname,email, password, spassword)
    LocalStorageFrom();
    // console.log(userreg);
    
    }
    /************************************************/
var regName = /^[A-Za-z]+$/; 
function ufname(fname){
let out;
       // for user name
if(regName.test(fname)){
    console.log('correct fnam');
    out=fname;
    return out;
   }
else {
    fnameMsg.textContent="Invalid First name given, required only characters";
}}
/****************************/ 
function ulname(lname){
    let outl;
    // var regName = /^[A-Za-z]+$/;        // for user name
    if(regName.test(lname)){
        console.log('correct last');
        outl=lname;
        return outl;
       }
    else {
        lnameMsg.textContent="Invalid Last name given, required only characters";
    }}
/**********************/ 
function mail(email){
    let out3;
 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // for email
    if(!filter.test(email)){
        console.log('correct @');
        out3=email;
        return out3;
       }
    else {
        mailMsg.textContent="Invalid email given, missing @";
    }}
/*************************** */
/*To check from password */
function checkPassword(password,spassword){
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num=/[\d]{2,}/;
    let capital=/[A-Z]/;
    let symboles=/[#$@!%&*?]/;
    if ((regex.test(password))&& (regex.test(spassword))){ //To check from 2 passwords syntax
        psMsg.textContent= 'password syntax is Incorrect';
        
    }
    else if((!capital.test(password[0])) && (!capital.test(spassword[0]))){ //To check from the first letter
        psMsg.textContent= 'Incorrect! password must be capital.';
    }
    else if((!num.test(password))&&(!num.test(spassword))){
        console.log('You password must contain 2 numbers at least');
         psMsg.textContent= 'You password must contain 2 numbers at least';
    }
    else if((!symboles.test(password)) && !symboles.test(spassword)){
        console.log('You password must contain  at least 1 character');
         psMsg.textContent= 'You password must contain  at least 1 character';
    }
    else if((password===spassword) &&(password.length>=8 && password.length<=32) &&(spassword.length>=8 && spassword.length<=32)){
        console.log('password syntax is correct');
    }else{
        ps2Msg.textContent= `Passwords don't match`;
    }
}
/********************************** */
regisform.addEventListener("submit", checking);
function checking(event) {
event.preventDefault();

let fname = event.target.fname.value;
let lname = event.target.lname.value;
let email = event.target.email.value;
let password = event.target.pass.value;
let spassword = event.target.conpass.value;
console.log(fname);
console.log(lname);
console.log(email);
console.log(password);
console.log(spassword);

// Redirecting to login page.
new User(fname, lname,email, password, spassword);
location.replace("../html/login.html");
}  
checking();

