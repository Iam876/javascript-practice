let arr2;
document.write("<h2> Array Method Practice </h2>");
arr2 = ["Ibrhaim", "Babu", "Kamal", "Xiao", "Akash"];
document.write(arr2);

//array: sort()
document.write("<br><br>" + arr2.sort());
//array: reverse();
document.write("<br><br>" + arr2.reverse());

// array: push()
arr2.push("jaber", "Ishmum", "Rubel");
document.write("<br><br>" + arr2);

// array: pop()
arr2.pop();
document.write("<br><br>" + arr2);

//array: shift(): remove from first
arr2.shift();
document.write("<br><br>" + arr2);
//array: unshift(): insert on first
arr2.unshift("Nobita");
document.write("<br><br>" + arr2);

//array: concat() -> It remains as array
let arr3 = [1, 5, 6, 8, 9, 10];
let arr4 = ["a", "b", "c", "d", "e", "f"];
let cnct = arr4.concat(arr3);
document.write("<br>");

document.write(cnct);

//array: join() -> It converted from array to string
document.write("<br>");
let join = arr3.join(" ") + arr4.join(" ");
document.write(join);

//array: slice(start,end)

document.write("<br>");
document.write(cnct);

document.write("<br>");

let arr_slice = cnct.slice(2, 8);
document.write(arr_slice);

//array: splice(index,howmany,items)

document.write("<br>");
document.write(arr_slice);

document.write("<br>");

arr_slice.splice(4, 0, "Ibrahim Khalil", "Dihan", "Masud", "Ishmum");
document.write(arr_slice);
document.write("<br>");


/*array: isArray(ArrayName) ->  It returns boolean result if an array has objects then it will return true; Other wise false.
    syntax: Array.isArray(arrayName);
*/


let result = Array.isArray(arr_slice);
document.write(result);
document.write("<br>");

/*
    array: indexOf("search_item",start_from_where);
*/
let x=["Ibrahim","Dihan","Sajeeb","Dihan","Ibrahim","Ibrahim"]
document.write("<br>");
let result2 = x.indexOf("Dihan",0);
document.write("IndexOf position: "+result2);
document.write("<br>");
document.write("<br>");

/*
    array: indexOf("search_item",start_from_where);
*/

result2 = x.lastIndexOf("Sajeeb",5);

document.write("lastIndexOf position: "+result2);
document.write("<br>");

/*
array: includes() -> It's case-sensitive and it search items from an array.It returns boolean
*/

let result3 = x.includes("Dihan");
document.write(result3);

/*
array: some(functionName()) -> 
*/



