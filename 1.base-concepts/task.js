"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = (b**2) - 4*a*c;
  let x = (-b) / 2*a;
  let x1 = (-b + Math.sqrt(D) )/(2*a);
  let x2 = (-b - Math.sqrt(D) )/(2*a);

    if(D === 0){
      arr[0] = x;
    } else if (D > 0){
      arr[0] = x1;
      arr[1] = x2;
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}