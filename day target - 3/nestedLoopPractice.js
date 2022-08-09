


/* NESTED LOOP PRACTICE */

/*
    1
    12
    123
    1234
    12345

*/
let a,b;
for(a=1;a<=5;a++){
    for(b=1;b<=a;b++){
        document.write(b+" ");
    }
    document.writeln("<br>");
}


/*
    12345
    1234
    123
    12
    1  
*/
document.write("<br>");
document.write("<br>");
for(a=5;a>=1;a--){
    for(b=1;b<=a;b++){
        document.write(b+ " ");
    }
    document.write("<br>");
}

/*
    5 4 3 2 1
    4 3 2 1
    3 2 1
    2 1
    1
*/
document.write("<br>");
document.write("<br>");
for(a=5;a>=1;a--){
    for(b=a;b>=1;b--){
        document.write(b +" ");
    }
    document.write("<br>");
}
/*
    5 4 3 2 1
    5 4 3 2
    5 4 3
    5 4
    5
*/
document.write("<br>");
document.write("<br>");

for(a=1;a<=5;a++){
    for(b=5;b>=1;b--){
        document.writeln(b+" ");
    }
    document.write("<br>");
}