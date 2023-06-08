// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey I am First Promise");
//   }, 3000);
// });

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey I am second Promise rejected ");
//   }, 3000);
// });
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey I am third Promise");
//   }, 3000);
// });

// console.time()
// promiseOne .then((resolve) => {
//     console.log(resolve);
//   })
// promiseTwo .then((resolve) => {
//     console.log(resolve);
//   })
// promiseThree .then((resolve) => {
//     console.log(resolve);
//   })

//   console.timeEnd()

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey I am First Promise");
  }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey I am second Promise resolve ");
  }, 3000);
});
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey I am third Promise");
  }, 2000);
});

console.time()
Promise.all([promiseOne, promiseTwo, promiseThree])
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((rejected) => {
    console.log(rejected);
  })

  console.timeEnd()

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo")
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises)
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((rejected) => {
//     console.log(rejected);
//   });

  /*[
  { status: 'fulfilled', value: 3 },   
  { status: 'rejected', reason: 'foo' }
]
  */
// Expected output:
// "fulfilled"
// "rejected"
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve,reject) => setTimeout(reject, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// // Expected output: "quick"






const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  }).catch((reject)=>{console.log("rejected-----",reject);})
  // Expected output: "two"
  