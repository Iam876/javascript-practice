document.write("<b>Comparison check</b>");
let x = 20;
let y = 200;

console.log();

if(x!=y){
    document.writeln("<br><br>True");
}
else {
    document.writeln("<br><br>false");
}

    if(x==y && x!=0 && y!=0){
        document.write(true);
    }
    else document.write(false);

document.write("<br><br>Ternary Operator");
let result = (x!=y)?true:false;
document.write("<br><br>"+result);

document.write("<br><br> SWITCH CASE");
digit = 15;

switch(digit){
    case 1: document.write("<br><br>"+true); break;
    case 2: document.write("<br><br>"+true); break;
    case 3: document.write("<br><br>"+true); break;
    case 4: document.write("<br><br>"+true); break;
    case 5: document.write("<br><br>"+true); break;

    default: document.write("<br><br>"+false);
}

document.write("<br><br><b>PROMPT box</b>");
//let name = prompt("Enter CEO name: ");
let ceo = "sajib";
if(name == ceo){
    //alert(`That's correct:  ,${name}`);
}
else{
   // window.alert(`Not correct: ${name}`);
}

document.write("<br><br><b>FUNCTION</b>");

function name(){
    document.writeln("<br><br> IBRAHIM");
}

 name();
let  k = 200;
 function addTwo(x,y){
     k;
        let sum = x + y;

        return `sum of    ${x}  + ${y} = `+sum;
        
 }
 document.writeln(addTwo(20,30));

 document.write("<br><br><b>while Loop</b><br>");

 let i = 0;
 while(i<10){
    document.write("<br>This is while loop <br>");
    i++;
}
 document.write(`count(${i})`);

 document.write("<br><br><b>do while Loop</b><br>");
    let m = 1;
 do{
    m++;
    document.write("<br>This is do-while-loop <br>");
    
 }while(m!=10);

 document.write("<br><br><b>for Loop</b><br><br>");

 for(let t = 1; t<10;t++){
    if(t==3){continue;}
    document.writeln(`This is for loop ${t} <br><br>`);
    
 }
/*
========= practice ============

1) Comparison, (done)
2) If , logical , if-else , if else-if,ternary
3) switch,
4) 18 & 19: Alert Box + Confirm Box
5) Prompt Box
6) Funtion , parametr , return value
7) 24: GLobal and Local
8) 25: Event 
10) while , do while , for , break-continue
11) even-odd
12) nested loop
 

*/