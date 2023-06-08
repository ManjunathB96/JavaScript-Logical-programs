// // /*
// // Rest : used in fun declaration ,we can create fun that can take a no of var
// // Spread : used in fun cal , it merge n array/obj into single array/obj
// // */

// // //rest operator
// // function restFun(...rest) {
// //   console.log(rest);
// // }
// // restFun(1, 2, 3);

// // function restFun1(one, ...rest) {
// //   console.log(one);
// //   console.log(rest);
// // }
// // restFun1(1, 2, 3);

// // //spread operator
// // function spreadFun(singleArr) {
// //   console.log(singleArr);
// // }
// // spreadFun([...[1, 2, 3], ...[1, 2, 3]]);

// const user = {
//   firstName: "Manju",
//   lastname: "Belagavi",
//   email: "bbelagavi4@gmail.com",
//   city: "Belagavi",
// };

// const newUser = {
//   lastname: "Belagavi",
//   age: 28,
//   email: "bbelagavi4@gmail.com",
//   city: "Bangalor",
// };

// const upatedUser = { ...user, ...newUser };
// console.log("Output ===> upatedUser:", upatedUser);

//memoization
/*
memoization is a form of chaching ,where the return val of fun is cached based on it's params , 
where the same params passed again and again the cached version of fun is returned 
*/

let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (fun) => {
  let cache = {};

  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return `cached value ==>${cache[n]}`;
    } else {
      let sum = fun(n);
      cache[n] = sum;
      return `Calc sum first time ==> ${sum}`;
    }
  };
};

const output = memoize(calc);
console.time()
console.log(output(5));
console.timeEnd()

console.log('********************************');
console.time()
console.log(output(5));
console.timeEnd()

console.log(output(5));

console.log(output(10));
console.log(output(10));
