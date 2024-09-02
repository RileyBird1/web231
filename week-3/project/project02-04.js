/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Riley
      Date:   9-1-2024

      Filename: project02-04.js
 */

  // Function to display a numeric value as a text string in the format $##.##
  function formatCurrency(value) {
    return "$" + value.toFixed(2);
  }

  const CHICKEN_PRICE = 10.95;

  const HALIBUT_PRICE = 13.95;

  const BURGER_PRICE = 9.95;

  const SALMON_PRICE = 18.95;

  const SALAD_PRICE = 7.95;

  const SALES_TAX = 0.07;

  document.getElementById("chicken").onchange = calcTotal();

  document.getElementById("halibut").onchange = calcTotal();

  document.getElementById("burger").onchange = calcTotal();

  document.getElementById("salmon").onchange = calcTotal();

  document.getElementById("salad").onchange = calcTotal();


  function calcTotal() {

    let cost = 0;

    let buyChicken = document.getElementById("chicken").checked;

    let buyHalibut = document.getElementById("halibut").checked;

    let buyBurger = document.getElementById("burger").checked;

    let buySalmon = document.getElementById("salmon").checked;

    let buySalad = document.getElementById("salad").checked;

    if (buyChicken === true) {
      cost += CHICKEN_PRICE;
    } else {
      cost += 0;
    }

    if (buyHalibut === true) {
      cost += HALIBUT_PRICE;
    } else {
      cost += 0;
    }

    if (buyBurger === true) {
      cost += BURGER_PRICE;
    } else {
      cost += 0;
    }

    if (buySalmon === true) {
      cost += SALMON_PRICE;
    } else {
      cost += 0;
    }

    if (buySalad === true) {
      cost += SALAD_PRICE;
    } else {
      cost += 0;
    }

    document.getElementById("totalFood").innerHTML = formatCurrency(cost);

    let tax = cost * SALES_TAX;

    document.getElementById("foodTax").innerHTML = formatCurrency(tax);

    let totalCost = cost + tax;

    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

  }





