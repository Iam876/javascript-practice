// without function
//let random = Math.floor(Math.random()*1000);
//document.getElementById("random").innerHTML = "Random numbers are: "+random;

// with function

function randNumGen(max,min){
    return Math.floor(Math.random()*(max-min)) ;    
}
document.getElementById("random").innerHTML = "Random numbers are: "+randNumGen(1000,5);



// set method or object
/*
let item = new Set(["apple","banana","mango","orange"]);
let text = "";
item.forEach(function(values){
    text+=values+"<br>";
})
document.getElementById("get-set").innerHTML = text;
*/
/*
let item = new Set();
item.add("Apple");
item.add("Banana");
item.add("Coconut");
item.add("Damson");
item.add("Elderberry");
item.add("Fig");

item.delete("Apple");

let text = "";
for (let x of item) {
     text+=x;
}
document.getElementById("get-set").innerHTML = text;
*/
let item = new Map();
item.set("name","ibrahim");
item.set("age",24);
item.set("country","BD");
let text =  "";
item.forEach(function(key,value){
    return key +" "+value;
})
document.getElementById("get-set").innerHTML = text;
