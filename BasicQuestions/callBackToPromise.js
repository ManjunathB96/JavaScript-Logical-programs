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
