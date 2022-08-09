let arr1, j, k;
arr1 = [
  ["Ibrahim Khalil", 23, "0123456789", "CSE"],
  ["Sajib Ahmed", 23, "0123456789", "CSE"],
  ["Sabuj", 23, "0123456789", "CSE"],
  ["Santo", 23, "0123456789", "CSE"],
  ["Farabi", 23, "0123456789", "CSE"],
  ["Shahin", 23, "0123456789", "CSE"],
  ["Shorif", 23, "0123456789", "CSE"],
  ["isteak", 23, "0123456789", "CSE"],
  ["Dihan", 23, "0123456789", "CSE"],
  ["Ashraful", 23, "0123456789", "CSE"],
];
//array element delete
delete arr1[0][3];
//Done array element delete
document.write("<table border='1px' colspan='0' cellspan='0'>");
for (j = 0; j < arr1.length; j++) {
  //document.write(arr1[j] + "<br><br>");
  document.write("<tr>");
  for (k = 0; k < arr1[j].length; k++) {
    document.write("<td colspan='3'>" + arr1[j][k] + "</td>");
  }
  document.write("</tr>");
  document.write("<br>");
}
document.write("</table>");
document.write("<br>");


