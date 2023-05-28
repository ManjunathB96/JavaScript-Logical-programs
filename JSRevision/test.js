// const { fail } = require("assert");
// const { table } = require("console");

// const variable = ""; //null [] "" 0 NaN undefined

// const isTrue = variable ? true : false;
// console.log("file: test.js: => isTrue:", isTrue);

// //*********convert str to num
// let a = "13";
// console.log(typeof a);

// a = +13;
// console.log(typeof a);

// //*************substring
// const str = "Hello Manjunath ll S Belagavi ll";
// const sub = "a";

// //exists where
// console.log(str.indexOf(sub));
// //exists or not
// console.log(str.includes(sub));
// //substring exists how many times //find the frequency or count of char in string
// console.log(str.split(sub).length - 1);

// //count char inside  str array
// const myArr = ["manju", "ramu", "banu", "tanu"];
// const freq = myArr.join("").split("u").length - 1;
// console.log(" freq:", freq);

// //*****Sort string array elements */
// const names = ["manju", "banu", "tanu", "rohan"];
// const result1 = names.sort((a, b) => a.localeCompare(b));
// console.log("file: => result1:", result1);
// const result2 = names.sort((a, b) => b.localeCompare(a));
// console.log("file: => result2:", result2);

// //when we need to use arrow fun

// /*
// arrow fun we should not use in
// 1)constructor
// 2)Object methods
// 3)event handlers
// 4)prototypes

// */
// class DelayLogger {
//   constructor() {
//     this.message = "Hello World";
//   }
//   log() {
//     setTimeout(() => {
//       //function(){
//       console.log(this.message);
//     }, 1000);
//   }
// }
// const logger = new DelayLogger();
// logger.log();

// //*********JS abstract and strick equality */
// //abstract(loose) equality
// console.log(1 == "1");
// console.log(null == undefined);
// console.log(0 == false);

// //strict equality
// console.log(1 === "1");
// console.log(null === undefined);
// console.log(0 === false);

// let surname = null;
// if (surname == undefined) {
//   console.log(surname);
// }

// let playerName;
// if (playerName == null) {
//   console.log(playerName);
// }

// //***************  sorting array of object */

// const cities = [
//   { name: "Belagavi", pincode: 12 },
//   { name: "Solapur", pincode: 12345 },
//   { name: "Kolapur", pincode: 1234 },
//   { name: "Delhi", pincode: 123 },
// ];

// cities.sort((city1, city2) => {
//   city1 = city1.name.toLowerCase();
//   city2 = city2.name.toLowerCase();

//   if (city1 < city2) {
//     return -1;
//   }
//   if (city1 > city2) {
//     return 1;
//   }
//   return 0;
// });
// console.table(cities);

//** add missing odd numbers */

// // const input = [3, 5, 7, 9, 11, 13, 17];

// for (let i = 0; i < input.length; i++) {
//   const curr = input[i];
//   let next = curr + 2;
//   if (input[i + 1] !== next) {
//     console.log(i);
//     let pos = i + 1;
//     input.splice(pos, 0, next);
//     console.log(next);
//     break;
//   }
// }
// console.log(input);
//****************************** */

//printing 100 odd numbers
const input = [];
for (let i = 0; i <=100; i++) { 
  input[0]=1
  for (let i = 0; i < input.length; i++) {
    const curr = input[i];
    let next = curr + 2;
    if (input[i + 1] !== next) {
    //  console.log(i);
      let pos = i + 1;
      input.splice(pos, 0, next);
     // console.log(next);
      break;
    }
  } 
}
console.log(input);