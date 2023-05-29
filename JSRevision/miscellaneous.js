
//big integer number===> convienent to read 
const max = 1_00_000;
console.log(max);


////swap two value using XOR

let val1 = 15;
let val2 = 25;

val1 = val1 ^ val2;
val2 = val1 ^ val2;
val1 = val1 ^ val2;

console.log(`val1 ==>${val1} and val2 ==>${val2}`);

let year = 2024;

const isLeapYear =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "leap year"
    : "not leapyear";
console.log("file: test.js:22 => isLeapYear:", isLeapYear);



const variable = []; //null [] "" 0 NaN undefined
const isTrue = variable ? true : false;
console.log("file: test.js: => isTrue:", isTrue);