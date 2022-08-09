document.write("<h2> Object practice </h2>");
document.write("<h3> Object creating </h3>");

let student = {
    name : "Ibrahim",
    section : 01,
    subject : "CSE" ,
    age : 23,
    result : ["pass","pass","failed","fail"],
    admission_cost : function(){
        return 17000;
    },
    admission_info: function(){
        document.write("Student Information: ");
        return "<br><br>name: "+this.name+"<br> subject: "+this.subject+"<br> section: "+this.section;
        
    }
}

document.write("<h3> for/in loop </h3>"); // this loop is used for object

for(var key in student){
    document.write(key +" : " + student[key]+"<br>");
}

document.write(student.result+"<br>");
document.write(student.name+"<br>");
document.write(student.admission_cost());
document.write(student.admission_info());

document.write("<h3> another way of object creating </h3>");
/*
let teacher = new Object();

teacher.name = prompt("Enter teacher name: ");
teacher.subject = prompt("Enter teacher subject: ");
teacher.phone = prompt("Enter teacher phone: ");
teacher.room = prompt("Enter teacher room: ");

document.write(teacher.name+"<br>");
document.write(teacher.subject+"<br>");
document.write(teacher.phone+"<br>");
document.write(teacher.room);
*/

document.write("<h3> Array of object </h3>");

let stu_info = [
    {name:"Ibrahim",class:"eight",roll:"11"},
    {name:"masud",class:"eight",roll:"01"},
    {name:"zanin",class:"eight",roll:"05"},
    {name:"654",class:"eight",roll:"09"}
]


for(let k=0;k<stu_info.length;k++){
    document.write(stu_info[k].name+" ");
    document.write(stu_info[k].class+" ");
    document.write(stu_info[k].roll+"<br>");
}

document.write("<h3> Constant value changing by object </h3>");

const val1 = [10,20,30,40];
// val1 = [5,6,7,8]; it won't work

val1.forEach(element => {
    document.write(element+"<br>");
});
document.write("after changing <br>")
val1[0]=15;
val1[1]=25;
val1[2]=35;
val1[3]=45;
val1.forEach(element => {
    document.write(element+"<br>");
});


document.write("<h3> Map method </h3>");

let arr = [
    {fname:"Ibrahim",lname:"khalil"},
    {fname:"asd",lname:"dd"},
    {fname:"asdaww",lname:"cfdfd"},
    {fname:"weweq",lname:"asd cxc"},
]
document.write(arr.map(fullName));
function fullName(x){
    return x.fname+" "+x.lname+"<br>";
}
