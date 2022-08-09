let d = new Date();



if(d.getMonth()==7){
    month = "august";
}
else{
    month = "not a month";
}

document.getElementById("demo").innerHTML=month;
