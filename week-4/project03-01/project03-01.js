/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Riley Bird
      Date:   9-8-24

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < 5; i++) {
  document.getElementsByClassName("menuItem").onclick = calcTotal();
}

function calcTotal () {
  let orderTotal = 0;

  for (i;) {
    if (item1 === true) {
      document.getElementsByClassName("menuItem").innerHTML =
      Number(item1.value)
      let orderTotal = orderTotal += item1;
    } else {
      orderTotal += 0;
    }
  }
}

let billTotal = document.getElementById("billTotal");

billTotal.innerHTML = formatCurrency(orderTotal);


 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }