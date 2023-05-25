// node recursion.js

/*
//*** Print numbers from 5 to 1 **** 
function printNum(num) {
  if (num === 0) {
    return;
  }
  return `${num} ${printNum(num - 1)}`;
}

const res = printNum(5);
console.log(res);
*/

/*
//*** Print numbers from 1 to 10 **** 
function printNum(num) {
    if (num === 11) {
      return;
    }
    return `${num} ${printNum(num + 1)}`;
  }
  
  const res = printNum(1);
  console.log(res);
  */

function sumOfNatural(i, n, sum) {
  if (i === n) {
    sum += i;
    console.log(sum);
    return;
  }
  sum += i;
  sumOfNatural(i + 1, n, sum);
  console.log(i);
}
sumOfNatural(1, 5, 0);

// function factorial(n) {
//   if (n === 1 || n === 0) {
//     return 1;
//   }

//   let value = factorial(n - 1);
//   let calFact = n * value;

//   return calFact;
// }

// const result = factorial(5);
// console.log(result);
