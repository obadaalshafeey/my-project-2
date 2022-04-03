'use strict';
var enterunum =document.getElementById('usrname');
var enterPwd =document.getElementById('usrpassword');

    function checkDate(){

    var X=localStorage.getItem('Data');

    let info1=JSON.parse(X)
    // var getPwd=localStorage.getItem('userPasss');
    console.log(X);
console.log(info1);
    console.log(info1[0]);
    console.log(info1[3]);

if ((enterunum.value ==info1[0])&&(enterPwd.value == info1[3])) {
    
    alert("sucs");
    window.location="./welocome.html";

}

else {
console.log(enterPwd.value);
console.log(enterunum.value);
    alert("wrong");

}

}