<<<<<<< HEAD
function findSmallestAndLar(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return `min ==> ${min} , max ==>  ${max}`;
}

const arr = [8, 5, 1, 2, 3, 4, 16, 9];
let res = findSmallestAndLar(arr);
console.log(res);
=======
function findSmallestAndLar(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return `min ==> ${min} , max ==>  ${max}`;
}

const arr = [8, 5, 1, 2, 3, 4, 16, 9];
let res = findSmallestAndLar(arr);
console.log(res);
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
