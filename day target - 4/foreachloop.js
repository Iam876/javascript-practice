
document.write("<h2> Foreach loop 2 way practice </h2>");

let name = ["Ibrahim","Khalil","Dina","Hafiza"];

name.forEach((element,index) => {
  document.writeln(index + ":" + element+"<br>");
});


name.forEach(function(value,index){
    document.write(index +" : " + value +"<br>");
});