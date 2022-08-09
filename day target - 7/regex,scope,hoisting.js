"use strict";
// global var can be accessed from function.
let carName = "BMW";
function nameCar(){
//document.getElementById("scope").innerHTML="Car Brand is "+carName;
};
nameCar();

//arrow function

 
stuName = (name) => {return name};
document.getElementById("scope").innerHTML=stuName("Ibrahim");
stuName = (name,age,className) => {return "student name: "+name+"<br>"+"age: "+age+"<br>"+"className: "+className};
 
