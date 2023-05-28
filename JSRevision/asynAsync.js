// // //synchronous
// function f1() {
//     console.log("Hi I am f1");
// }
// function f2() {
//     console.log("Hello  I am f2");
// }
// function f3() {
//     console.log("Hey I am f3");
// }

// f1()
// f2()
// f3()
// /*Hi I am f1
// Hello  I am f2
// Hey I am f3
// */

// function myFun1() {
//     console.log("Hi");
// }
// function myFun2() {
//     console.log("Hello");
//     myFun1()

// }
// function myFun3() {   // myFun3() this function enter a call stack first and it is the last one to poped up
//     console.log("Hey");
//     myFun2()

// }
// myFun3()

//asynchronous
/*
Starts a timer that can be used to compute the duration of an operation.
 Timers are identified by a unique label.
  Use the same label when calling timeEnd to stop the timer and 
  output the elapsed time in suitable time units to stdout. 
  For example, if the elapsed time is 3869ms, console.timeEnd() displays "3.869s".
*/
console.time("Time");
const asynFn1 = () => {
  setTimeout(() => {
    console.log("i am async with time delay 2 sec");
  }, 3000);
};
const asynFn2 = () => {
  setTimeout(() => {
    console.log("i am async with time delay 5 sec");
  }, 5000);
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let condition = true;
    if (condition) {
      resolve("Hi i am promise : promise is given first priority in  event loop bcz promise stored in microstack");
    } else {
      reject("I failed to fulfill my promise");
    }
  }, 3000);
});
promise
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

console.log("Hi Manjunath S B");

const asynFn3 = () => {
  setTimeout(() => {
    console.log("i am async with time delay 1 sec");
  }, 1000);
};

asynFn1();
asynFn2();
asynFn3();
console.timeEnd("Time");
