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
      //it runs only once
      console.log("cache value-----", cache);
      return cache[n];
    } else {
        console.log("calculating first time  n value---",n);
      let result = fun(n);
      cache[n] = result;
      console.log("res----",result);
      return result;
    }
  };
};



console.log("**************************************");
console.time();
const finalResult = memoize(calc);
console.log(finalResult(100));
console.timeEnd();

console.log("**************************************");
console.time();
console.log(finalResult(100));
console.timeEnd();

console.log("**************************************");
console.time();
console.log(finalResult(200));
console.timeEnd();

console.log("**************************************");
console.time();
console.log(finalResult(200));
console.timeEnd();


console.log("**************************************");
console.time();
const r = calc(100);
console.log(r);
console.timeEnd();