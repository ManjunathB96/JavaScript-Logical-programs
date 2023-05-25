<<<<<<< HEAD
function factorialOfNum(num) {
  if (num < 0) {
    console.log("Factorial of negative num does not exists");
  } else if (num == 0) {
    console.log(`Factorial of num ${num} is 1 `);
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    console.log(`Factorial of num ${num} is ${fact}`);
  }
}
let num = 4;
factorialOfNum(num);
=======
function factorialOfNum(num) {
  if (num < 0) {
    console.log("Factorial of negative num does not exists");
  } else if (num == 0) {
    console.log(`Factorial of num ${num} is 1 `);
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    console.log(`Factorial of num ${num} is ${fact}`);
  }
}
let num = 4;
factorialOfNum(num);
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
