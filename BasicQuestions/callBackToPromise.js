<<<<<<< HEAD
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function myFun() {
  console.log("Hello World");
}
greet("Manjunath", myFun);

let flag = true;
const promise = new Promise(function (resolve, reject) {
  if (flag) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then((reslove) => {
    console.log(reslove);
  })
  .catch((reject) => {
    console.log(reject);
  });
=======
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function myFun() {
  console.log("Hello World");
}
greet("Manjunath", myFun);

let flag = true;
const promise = new Promise(function (resolve, reject) {
  if (flag) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then((reslove) => {
    console.log(reslove);
  })
  .catch((reject) => {
    console.log(reject);
  });
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
