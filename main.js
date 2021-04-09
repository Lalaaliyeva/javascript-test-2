var firstName,lastName,age,result,btn,userColor;
firstName=document.querySelector("#userName");
lastName = document.querySelector("#userLastName");
age = document.querySelector("#userAge");
result = document.querySelector("#divId").innerHTML;
userColor = document.querySelector("#userColor");



btn=document.querySelector("#btn");
btn.addEventListener("click",show);
function show(){
document.querySelector("#divId").style.display = "block";
document.querySelector("#divId").innerHTML += "Adiniz:" + firstName.value + "<br>" +
 "Soyadiniz:" + lastName.value + "<br>"+
 "Yasiniz:" + age.value + "<br>" +"<br>";


 var newSpan = document.createElement('span');

var t = document.createTextNode(result).style.color = userColor.value;
newSpan.appendChild(t);
document.getElementById("divId").appendChild(newSpan);






//document.querySelector("#result").style.color = userColor.value;

}